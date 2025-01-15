'use client';
import Separator from "@/components/separator";
import TransactionItem from "@/components/transaction-item"
import TransactionSummaryItem from "@/components/transaction-summary-item";
import { groupAndSumTransactionsByDate } from '@/lib/utils';
import { useState } from "react";
import Button from '@/components/button'
import { fetchTransactions } from "@/lib/actions";

export default function TransactionList({ range, initialTransactions }) {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [offset, setOffSet] = useState(initialTransactions.length);
  const grouped = groupAndSumTransactionsByDate(transactions);

  const handleClick = async (e) => {
    const nextTransactions = await fetchTransactions(range, offset, 10)
    setOffSet(prevValue => prevValue + 10)
    setTransactions(prevTransactions => [
      ...prevTransactions,
      ...nextTransactions
    ])
  }

  return (
    <div className="space-y-8">
      { Object.entries(grouped)
        .map(([date, {transactions, amount}]) =>
          <div key={date}>
            <TransactionSummaryItem date={date} amount={amount} />
            <Separator />
            <section className="space-y-4">
              {transactions.map(transaction =>
              <div key={transaction.id}>
                <TransactionItem {...transaction} type={transaction.type} />
              </div>)}
            </section>
          </div>
        )
      }
      <div className="flex justify-center">
        <Button variant='ghost' onClick={handleClick}>Load More</Button>
      </div>

    </div>
  );
}

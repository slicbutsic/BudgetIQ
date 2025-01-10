import Separator from "@/components/separator";
import TransactionItem from "@/components/transaction-item"
import TransactionSummaryItem from "@/components/transaction-summary-item";
import { createClient } from '@/lib/supabase/server'

// looping through all transactions and grouping them by date
const groupAndSumTransactionsByDate = (transactions) => {

  const grouped = {};
  for(const transaction of transactions) {
    const date = transaction.created_at.split('T')[0]
    // this means that it will take the value from the DB : "created_at": "2023-03-15T23:00:00",
    // split it in to parts at the "T and keeps the first part [0]... which is the date"
    if (!grouped[date]) {
      // if the date is not in the grouped object, it will create a new object,
      grouped[date] = { transactions: [], amount: 0}
      // with empty array and 0 amount, to store the transactions and the total amount
    }
    grouped[date].transactions.push(transaction)
    //adds the transaction to the transactions array
    const amount = transaction.type === 'Expense' ? -transaction.amount : transaction.amount
    // if the transaction type is expense, it will convert to negative, otherwise as is...
    grouped[date].amount += amount
    // updates total amount for the date
  }
  return grouped
}

export default async function TransactionList() {
  //fetching transactions supabase
  const supabase = createClient()
  const {data: transactions , error } = await supabase
    .from('transactions')
    .select('*')
    .order('created_at', {ascending: false})

  const grouped = groupAndSumTransactionsByDate(transactions);

  return (
    <div className="space-y-8">
      { Object.entries(grouped)
        .map(([date, {transactions, amount}]) =>
          <div key={date}>
            <TransactionSummaryItem date={date} amount={amount} />
            <Separator />
            {/* <hr className="my-4 border-gray-200 dark:border-gray-800"/> */}
            <section className="space-y-4">
              {transactions.map(transaction =>
              <div key={transaction.id}>
                <TransactionItem {...transaction} type={transaction.type} />
              </div>)}
            </section>
          </div>
        )
      }
    </div>
  );
}

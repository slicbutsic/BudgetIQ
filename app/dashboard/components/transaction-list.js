import Separator from "@/components/separator";
import TransactionItem from "@/components/transaction-item"
import TransactionSummaryItem from "@/components/transaction-summary-item";
import { createClient } from '@/lib/supabase/server'
import { groupAndSumTransactionsByDate } from '@/lib/utils';

export default async function TransactionList({range}) {
  //fetching transactions supabase
  const supabase = createClient()

  let { data: transactions, error } = await supabase
    .rpc('fetch_transactions', {
      // limit_arg,
      // offset_arg,
      range_arg: range
    })
    if (error) throw new Error("We can't fetch transactions")


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

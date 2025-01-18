import { createClient } from "@/lib/supabase/server";
import TransactionForm from "@/app/dashboard/components/transaction-form";
import { notFound } from 'next/navigation';

export const metadata = {
  title: "Edit Transaction"
};

export default async function Page({params: {id}}) {
  const supabase = createClient()
  const { data: transaction, error } = await supabase.
    from('transactions')
    .select('*')
    .eq('id', id)
    .single()

    if (error) notFound()

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-8">Edit Transaction</h1>
      <TransactionForm initialData={transaction} />
    </div>
  )
}

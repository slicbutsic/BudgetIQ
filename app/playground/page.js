import PageHeader from "@/components/page-header";
import TransactionItem from "@/components/transaction-item";
import Trend from "@/components/trend";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Button from "@/components/button";

export default function Page() {
  return (
    <main className="space-y-8 mb-44">
      <h1 className="text-4xl mt-8">
        Playground
      </h1>
      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="flex space-x-4">
          <PageHeader />
        </div>
      </div>


      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="flex space-x-8">
          <Trend type='Income' amount={1000} prevAmount={900} />
          <Trend type='Expense' amount={12000} prevAmount={10000} />
          <Trend type='Investment' amount={7000} prevAmount={11100} />
          <Trend type='Savings' amount={500} prevAmount={950} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionItem type='Income' description='Salary' amount={2000}/>
          <TransactionItem type='Expense' category='Food' description='Going out' amount={29}/>
          <TransactionItem type='Saving' description='Kids' amount={500}/>
          <TransactionItem type='Investment' description='Stocks' amount={9000}/>
        </div>
      </div>




      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionSummaryItem + TransactionItem</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionSummaryItem date='07-01-2025' amount={3500}/>
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />
          <TransactionItem type='Income' description='Salary' amount={2000}/>
          <TransactionItem type='Expense' category='Food' description='Going out' amount={29}/>
          <TransactionItem type='Saving' description='Kids' amount={500}/>
          <TransactionItem type='Investment' description='Stocks' amount={9000}/>
        </div>
      </div>



      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-700 dark:text-gray-300 block mb-1">Your name</label>
            <input type="text"
            placeholder="John Smith"
            className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950" />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-300 block mb-1">City</label>
            <select
            className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950" >
              <option>Brisbane</option>
              <option>Sydney</option>
              <option>Melbourne</option>
              <option>Perth</option>
              <option>Adelaide</option>
              <option>Hobart</option>
            </select>
          </div>



          <div className="flex items-center">
            <input type="checkbox"
            className="rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm"/>
            <label className="text-gray-700 dark:text-gray-300 ml-2">City</label>
          </div>



        </div>
      </div>


    </main>
  )
}

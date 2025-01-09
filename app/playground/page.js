import PageHeader from "@/components/page-header";
import TransactionItem from "@/components/transaction-item";
import Trend from "@/components/trend";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Button from "@/components/button";
import Label from "@/components/label";
import Input from "@/components/input";
import Select from "@/components/select";
import Separator from "@/components/separator";
import Skeleton from "@/components/skeleton";

export default function Page() {
  return (
    <main className="space-y-8 mb-44">
      <h1 className="text-4xl mt-8">
        Playground
      </h1>
      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <Separator />
        <div className="flex space-x-4">
          <PageHeader />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <Separator />
        <div className="flex space-x-8">
          <Trend type='Income' amount={1000} prevAmount={900} />
          <Trend type='Expense' amount={12000} prevAmount={10000} />
          <Trend type='Investment' amount={7000} prevAmount={11100} />
          <Trend type='Savings' amount={500} prevAmount={950} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
        <Separator />
        <div className="space-y-4">
          <TransactionItem type='Income' description='Salary' amount={2000}/>
          <TransactionItem type='Expense' category='Food' description='Going out' amount={29}/>
          <TransactionItem type='Saving' description='Kids' amount={500}/>
          <TransactionItem type='Investment' description='Stocks' amount={9000}/>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionSummaryItem + TransactionItem</h2>
        <Separator />
        <div className="space-y-4">
          <TransactionSummaryItem date='07-01-2025' amount={3500}/>

          <Separator />
          <TransactionItem type='Income' description='Salary' amount={2000}/>
          <TransactionItem type='Expense' category='Food' description='Going out' amount={29}/>
          <TransactionItem type='Saving' description='Kids' amount={500}/>
          <TransactionItem type='Investment' description='Stocks' amount={9000}/>
        </div>
      </div>

      {/* FORMS */}
      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <Separator />
        <div className="grid grid-cols-2 gap-4">
          <div>

            <Label className="text-gray-700 dark:text-gray-300 block mb-1">Name</Label>
            <Input type='text' placeholder="John Smith" />
          </div>

          <div>
            <Label className="text-gray-700 dark:text-gray-300 block mb-1">City</Label>
            <Select>
              <option>Brisbane</option>
              <option>Sydney</option>
              <option>Melbourne</option>
              <option>Perth</option>
              <option>Adelaide</option>
              <option>Hobart</option>
            </Select>
          </div>

          <div className="flex items-center">
            <Input type='checkbox' id='terms' />
            <Label className='ml-2' htmlFor='terms'>Accept terms</Label>
          </div>

        </div>

{/* creating skeleton ui */}
        <div>
          <h2 className="mb-4 text-lg font-mono">Loading Skeleton</h2>
          <Separator />
          <div className="space-y-8">
            <div className="flex space-x-4">
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </div>
        </div>


        <div className="mt-5 space-y-4">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>



      </div>

    </main>
  )
}

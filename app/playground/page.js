import PageHeader from "@/components/page-header";
import Trend from "@/components/trend";

export default function Page() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">
        Welcome to the playground!
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



    </main>
  )
}

import { useFormatCurrency } from "@/hooks/use-format-currency";
import { Coins, Landmark, PiggyBank, Wallet } from "lucide-react";

export default function TransactionItem({
  type, category, description, amount
}) {
  const typesMap = {
    'Income': {
      icon: Coins,
      colours: 'text-green-600 dark:text-green-300'
    },
    'Expense': {
      icon: Wallet,
      colours: 'text-red-600 dark:text-red-300'
    },
    'Saving': {
      icon: PiggyBank,
      colours: 'text-indigo-600 dark:text-indigo-300'
    },
    'Investment': {
      icon: Landmark,
      colours: 'text-yellow-600 dark:text-yellow-300'
    }
  }
  const IconCompenent = typesMap[type].icon
  const colours = typesMap[type].colours

  const formattedAmount = useFormatCurrency(amount)
  return (
    <div className="w-full flex items-center">

      <div className='flex items-center mr-4 grow'>
        <IconCompenent className={`${colours} mr-2 w-4 h-4 hidden sm:block`} />
        <span>
          {description}
        </span>
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        {category &&
        <div className="rounded-md text-xs bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
          {category}
        </div>}
      </div>



      <div className="min-w-[70px] text-right">{formattedAmount}</div>

      <div className="min-w-[50px] flex justify-end">...</div>


    </div>
  )
}

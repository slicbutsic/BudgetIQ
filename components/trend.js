export default function Trend({
  type, amount, prevAmount
}) {

  const colourClasses = {
    'Income': 'text-green-600 dark: text-green-300',
    'Expense': 'text-red-600 dark: text-red-300',
    'Investment': 'text-indigo-600 dark: text-indigo-300',
    'Savings': 'text-yellow-600 dark: text-yellow-300',
  }

  const calcPercentageChange = (amount, prevAmount) => {
    if(prevAmmount === 0) return 0;
    return ((amount - prevAmount) / prevAmount) * 100
  }

  

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-AU', {style: 'currency', currency: 'AUD'}).format(amount)

  return (
    <div>
      <div className={`font-semibold ${colourClasses[type]} text-2xl`}>
        {type}
      </div>
      <div className="text-2xl font-semibold teext-black dark:text-white mb-2">
        {amount ? formatCurrency(amount) : formatCurrency(0)}
      </div>
    </div>
  )

}

import BaseTrend from "@/components/trend"
import { createClient } from "@/lib/supabase/server"

export default async function Trend({type, range}) {
  // const response = await fetch(`${process.env.API_URL}/trends/${type}`)
  // const {amount, prevAmount} = await response.json()

  const supabase = createClient()

  let { data, error } = await supabase
    .rpc('calculate_total', {
      range_arg: range,
      type_arg: type,
    })
  if (error) throw new Error('Could not fetch trend data')

  const amounts = data[0]



  return <BaseTrend type={type} amount={amounts.current_amount} prevAmount={amounts.previous_amount} />
}

import { useMemo } from 'react';

export const useFormatCurrency = (amount) => {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-AU', {style: 'currency', currency: 'AUD'})
    .format(amount)

  return useMemo(
    () => formatCurrency(amount),
    [amount]
  )

}

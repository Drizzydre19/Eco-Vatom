export const CURRENCIES = {
  USD: { symbol: '$', rate: 1 },
  GBP: { symbol: '£', rate: 0.79 },
  NGN: { symbol: '₦', rate: 1500 }
};

export function convertCurrency(amount, from, to) {
  return (amount * CURRENCIES[to].rate) / CURRENCIES[from].rate;
}

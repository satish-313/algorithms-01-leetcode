const buySell = (prices) => {
  let maxProfit = 0;
  if (prices.length <= 1) return maxProfit;

  let profit,
    low = 0;

  for (let i = 1; i < prices.length; i++) {
    profit = prices[i] - prices[low];
    if (profit < 0) low = i;

    maxProfit = Math.max(profit, maxProfit);
  }

  return maxProfit;
};

console.log(buySell([7, 1, 5, 3, 6, 4]));
console.log(buySell([7,-2,6,5,4]))
console.log(buySell([5,3]))


console.log("Problem 6.4 : Best time to buy and sell stock");
console.log("Time complexity O(n) and space complexity O(1)");
const prices = [7,6,4,3,1];
console.log(prices);
let leastPrice = Number.MAX_SAFE_INTEGER;
let profitIfSoldToday = 0;
let overallProfit = 0;
for(let i = 0;i < prices.length; i++)
{
    if(prices[i] < leastPrice)
    {
        leastPrice = prices[i];
    }
    profitIfSoldToday = prices[i] -  leastPrice;
    if(profitIfSoldToday > overallProfit )
    {
        overallProfit = profitIfSoldToday;
    }
}

console.log(overallProfit);


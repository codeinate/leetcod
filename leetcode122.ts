/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // buy 
    // if i + 1 is less than i then sell

    let profit = 0;
    let buy = prices[0];

    for (let i = 0; i < prices.length; i++)
    {
        if (buy > prices[i]) 
        {
            buy = prices[i];
        }

        if (prices[i] > prices[i + 1] || (i === prices.length -1 && prices[i] > buy))
        {
            profit += prices[i] - buy;
            buy = prices[i + 1];
        }
    }

    return profit;
};

maxProfit([1,2,3,4,5]);
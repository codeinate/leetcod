/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let p = 0;
    let buy = prices[0];

    for (let i = 0; i < prices.length; i++)
    {
        if (buy > prices[i]) buy = prices[i];

        if (prices[i] - buy > p)
        {
            p = prices[i] - buy;
        }
    }

    return p;
};

maxProfit([4,7,1,2]);
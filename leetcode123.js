/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // buy 
    // if i + 1 is less than i then sell
    // log first profit and second profit
    // on first profit, when you sell, log that profit
    // if second profit is 0, and you have a second profit, log it
    // if both profits are logged, replace the lowest profit. 

    // return the sum of both profits

    const profits = [0, 0];
    let buy = prices[0];

    for (let i = 0; i < prices.length; i++)
    {
        if (buy > prices[i]) 
        {
            buy = prices[i];
        }

        if (prices[i] > prices[i + 1] || (i === prices.length -1 && prices[i] > buy))
        {
            assignProfit(profits, prices[i] - buy);
            
            buy = prices[i + 1];
        }
    }

    return profits[0] + profits[1];
};

const assignProfit = (profits, thisProfit) => {
    if (profits[0] === 0) {
        profits[0] = thisProfit;
    }
    else if (profits[1] === 0) {
        profits[1] = thisProfit;
    }
    else 
    {
        const min = profits[0] < profits[1] ? 0 : 1
        
        if (profits[min] < thisProfit)
        {
            profits[min] = thisProfit;
        }
    }
}

console.log(maxProfit([1,2,4,2,5,7,2,4,9,0]));

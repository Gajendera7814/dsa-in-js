/*
    Best Time to Buy and Sell Stock.
    <------------------------------->

    Input: prices = [7, 1, 5, 3, 6, 4], Output: 5
    
    prices ---> 7 1 5 3 6 4
    days -----> 1 2 3 4 5 6

    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.

    Input: prices = [7, 6, 4, 3, 1], Output: 0
    
    Explanation: In this case, no transactions are done, and the max profit = 0.

    Note: Buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

*/


//<<<<<<<<<<<<<-------------------------------- Brute Force Approach -------------------------------->>>>>>>>>>>>>//

const maxProfitBruteForce = (prices) => {
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];  // Sell on day j, buy on day i
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
};
console.log(maxProfitBruteForce([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfitBruteForce([7, 6, 4, 3, 1]));   // Output: 0

/*
    Time complexity: O(n^2)
    Space Complexity: O(1)
*/




//<<<<<<<<<<<<<--------------------------------- Optimal Approach ---------------------------------->>>>>>>>>>>>>//

/*
    Approach :-

    - Initialize minPrice to a very high value and maxProfit to 0.

    - Loop through the price array:
        - For each price, update minPrice if the current price is lower.
        - Calculate the profit if the stock were sold today, and update maxProfit if the profit is higher.
    
    - Return maxProfit.
*/

const maxProfit = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        // Update minPrice if we find a lower price
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            // Calculate profit if we sell at the current price
            let profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    };
    return maxProfit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));   // Output: 0

/*
    Time complexity: O(n)
    Space Complexity: O(1)
*/




//<<<<<<<<<<<<<-------------------------------- Kadane’s Algorithm --------------------------------->>>>>>>>>>>>>//

/*
    Algorithm :-

    - Initialize currentProfit and maxProfit to 0.

    - Loop through the prices array:
        - Update currentProfit by adding the difference between today's price and yesterday's price.
        - If currentProfit becomes negative, reset it to 0.
    
    - Keep track of the maximum profit seen so far.
*/

const maxProfitKadane = (prices) => {
    let maxProfit = 0;
    let currentProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // Calculate daily profit (difference between consecutive days)
        currentProfit += prices[i] - prices[i - 1];
        
        // Reset currentProfit if it goes negative
        if (currentProfit < 0) {
            currentProfit = 0;
        }
        
        // Update maxProfit
        maxProfit = Math.max(maxProfit, currentProfit);
    };
    return maxProfit;
};
console.log(maxProfitKadane([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfitKadane([7, 6, 4, 3, 1]));   // Output: 0

/*
    Time complexity: O(n)
    Space Complexity: O(1)
*/

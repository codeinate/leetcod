/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let shortestCount = 0;
 
    if (nums.length === 0) return shortestCount;
    
    let start = 0;
    let end = 0;

    let sum = 0;

    while (end <= nums.length && start <= end)
    {
        if(sum >= target && start <= end)
        {
            if (end - start == 0)
            {
                shortestCount = 1;
            }
            else if (shortestCount === 0 || end - start < shortestCount)
            {
                shortestCount = end - start;
            }
            
            sum -= nums[start];
            start ++;
        }

        if (sum < target)
        {
            sum += nums[end];
            end ++;
        }
    }

    return shortestCount;
};

minSubArrayLen(7, [2,3,1,2,4,3])
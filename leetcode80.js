/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let writeIdx = 2;

    for(let i = 2; i < nums.length; i++)
    {
        console.log(`${writeIdx} | ${i} | ${nums[writeIdx]} | ${nums[i]} `);
        
        if (nums[i] != nums[writeIdx - 2] || nums[i] != nums[writeIdx - 1])
        {

            nums[writeIdx] = nums[i];
            writeIdx ++;
        }
    }

    return writeIdx;
};

removeDuplicates([0,0,1,1,1,1,2,3,3]);
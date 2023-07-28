/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let inflectionPoint = k % nums.length;

  nums.reverse();

  console.log(...nums.slice(0, inflectionPoint).reverse());
  nums.splice(0, inflectionPoint, ...nums.slice(0, inflectionPoint).reverse());

  console.log(...nums.slice(inflectionPoint, nums.length - 1).reverse());
  nums.splice(inflectionPoint, nums.length, ...nums.slice(inflectionPoint).reverse());
    console.log(nums);
};

rotate([1,2], 2);
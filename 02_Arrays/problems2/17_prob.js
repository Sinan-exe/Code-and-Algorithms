function maxSubArray(nums, target){
    let maxSum = 0;
    let tempSum = 0;
    for(let i =0; i < target; i++){
        maxSum += nums[i]
    }
    tempSum = maxSum;
    for(let i =target; i < nums.length; i++){
        tempSum = tempSum - nums[i - target] + nums[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}

console.log(maxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

function maxAverage(nums, k){
    let maxSum = 0;
    let tempSum =0;
    for(let i =0; i < k; i++){
        maxSum =(maxSum + nums[i])
    }
    tempSum = maxSum;
    for(let j =k; j<nums.length; j++){
        tempSum = tempSum-nums[j - k] + nums[j]
        maxSum = Math.max(maxSum, (tempSum))
    }

    return (maxSum)/k;

}

console.log(maxAverage([1, 12, -5, -6, 50, 3], 4))

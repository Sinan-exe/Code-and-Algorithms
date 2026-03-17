function minSubarrayLen(nums, target){

    let start=0;
    let sum =0;
    let minLength = Infinity;

    for(let end =0; end < nums.length;end++){
        sum += nums[end];

        while(sum >= target){
            minLength = Math.min(minLength, end-start + 1);
            sum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7))

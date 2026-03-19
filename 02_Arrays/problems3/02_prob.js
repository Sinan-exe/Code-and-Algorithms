function search(nums, val){
let left =0;
let right = nums.length-1;

while(left <= right){
    let middle = Math.floor((left+right)/2);
    if(nums[middle] < val){
        left = middle+1;
    }
    else if(nums[middle]> val){
        right = middle-1;
    }
    else {
        return middle
    }
}

return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4))

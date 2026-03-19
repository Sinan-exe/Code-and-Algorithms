function countZeroes(num){
    let left =0;
    let right = num.length-1;
    let firstIndex = -1;

    while(left <= right){
        let mid = Math.floor((left+right)/2)

        if(num[mid] === 0){
            firstIndex = mid;
            right=mid-1;
        }
        else{
            left = mid+1
        }
    }

    return firstIndex === -1 ? 0: num.length - firstIndex

}
console.log(countZeroes([1,0,0,0,0]))

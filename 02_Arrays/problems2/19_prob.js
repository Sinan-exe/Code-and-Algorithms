function longestSubString(str){

    let start = 0;
    let map = new Map();
    let len =0;

    for(let end =0; end < str.length; end++){
        let char = str[end]

        if(map[char]>=start){
            start = map[char]+1;
        }

        map[char] = end;
        len = Math.max(len, end-start+1)
    }
    return len
}
console.log(longestSubString("thisisawesome"))

function maxVowels(s, k){
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxCount = 0
    let count = 0
    for(let i =0; i < k; i++){
        if(vowels.has(s[i])){
            count++
        }
    }

    maxCount = count;
    for(let j =k; j < s.length; j++){
        if(vowels.has(s[j-k])){
            count--
        }
        if(vowels.has(s[j])){
            count++;
        }
        maxCount = Math.max(count, maxCount)
    }

    return maxCount;


}

console.log(maxVowels("abciiidef", 3))

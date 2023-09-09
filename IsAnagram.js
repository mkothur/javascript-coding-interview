const IsAnagram = (s, t) => {
    // const checker = (word) => {
    //     word = word.replace(/[^\w]/g, '').toLowerCase();
    //     word.split('').sort().join('').trim();
    // }

    // return checker(w1) === checker(w2)
    let sCount = {};
    let tCount = {};
    let N = s.length;
    for (let i = 0; i < N; i++) {
        if (!sCount[s[i]]) sCount[s[i]] = 0;
        if (!tCount[t[i]]) tCount[t[i]] = 0;
        sCount[s[i]]++
        tCount[t[i]]++
    }
    for (let ch in sCount) {
        if(sCount[ch] !== tCount[ch]) return false;
    }
    return true;
}

console.log(IsAnagram('listen', 'amma'));
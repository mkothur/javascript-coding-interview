/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--
    }
    return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
const isPalindrome = (str) => {
  let length = Math.floor(str.length / 2);
  for (let i = 0; i < length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
    console.log(str, length, str[i], str[str.length - i - 1]);
    return true;
  }
};
console.log(isPalindrome("racecar"));

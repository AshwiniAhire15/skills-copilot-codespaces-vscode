const isStringPalindromes = (str) => {
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
function getTotalPrice(arr) {
    let allDigits = arr.reduce((accum, elem) => accum + elem);
    let floorDigit = Math.floor(allDigits);
    return `$${floorDigit}`;
}
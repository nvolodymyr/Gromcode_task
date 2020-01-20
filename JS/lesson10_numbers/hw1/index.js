const arrr = [3.4, 2.32, -65, -50];


function getTotalPrice(arr) {
    let allDigits = arr.reduce((accum, elem) => accum + elem);
    let floorDigit = (Math.floor(allDigits * 100)) / 100;
    return `$${floorDigit}`;
}
// console.log(getTotalPrice(arrr));
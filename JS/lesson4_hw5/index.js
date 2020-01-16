let summ = 0;
let digitWithComma = 0;
let digitWithOutComma = 0;
for (let index = 1; index <= 1000; index++) {
    summ += index;

}
digitWithComma = summ % 1234;
digitWithOutComma = summ / 1234;
console.log(digitWithOutComma > digitWithComma);
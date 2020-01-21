import calcEventFunction, { getOddNumbers, getSquaredArray } from './calculator';

it('array with odd values', () => {
    let resultArray = getOddNumbers([2, 3, 4, 5, 6, 7]);
    expect(resultArray).toEqual([3, 5, 7]);
});
it('квадратні числа масива', () => {
    let resultArray = getSquaredArray([2, 3, 4, 5, 6, 7]);
    expect(resultArray).toEqual([4, 9, 16, 25, 36, 49]);

});
it('сума двох чисел', () => {
    let sum = calcEventFunction(5, 6)
    expect(sum).toEqual(11);
});
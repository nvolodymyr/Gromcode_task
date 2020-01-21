import calcEventFunction from './index';

it('array with even values', () => {
    let resultArray = calcEventFunction([2, 3, 4, 5, 6, 7]);
    expect(resultArray).toEqual([2, 4, 6]);
});
it('17 равно 17', () => {
    expect(17).toEqual(17);
});
it('18 не равно 17', () => {
    expect(18).not.toEqual(17);
});
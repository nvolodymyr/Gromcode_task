import calcEventFunction from './getMinSquaredNumber';

it('квадрат мінімального числа', () => {
    let resultArray = calcEventFunction([-777, 3, -2, 6, 45, -20]);
    expect(resultArray).toEqual(4);
});
it('пустий масив', () => {
    let resultArray = calcEventFunction([]);
    expect(resultArray).toEqual(null);

});
it('стрічка замість масиву', () => {
    let sum = calcEventFunction('dsdds')
    expect(sum).toEqual(null);
});
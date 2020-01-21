import { calc } from './getMinSquaredNumber';

it('+', () => {
    let resultArray = calc('5 + 5');
    expect(resultArray).toEqual('5 + 5 = 10');
});
it('-', () => {
    let resultArray = calc('5 - 5');
    expect(resultArray).toEqual('5 - 5 = 0');
});
it('*', () => {
    let resultArray = calc('5 * 5');
    expect(resultArray).toEqual('5 * 5 = 25');
});
it('/', () => {
    let resultArray = calc('5 / 5');
    expect(resultArray).toEqual('5 / 5 = 1');
});
it('not string', () => {
    let resultArray = calc(55);
    expect(resultArray).toEqual(null);
});
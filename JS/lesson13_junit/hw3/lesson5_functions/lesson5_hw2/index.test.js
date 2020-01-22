import { getPrimes } from "./index";
it('less 0', () => {
    let result = getPrimes(-3);
    expect(result).toEqual(null);
});
it('string', () => {
    let result = getPrimes('dssds');
    expect(result).toEqual(null);
});
it('нормальне виконання', () => {
    let result = getPrimes(3);
    expect(result).toEqual(undefined);
});
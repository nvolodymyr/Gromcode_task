import { compareSums } from "./index";
it('ab>bc', () => {
    let result = compareSums(1, 2, 3, 4);
    expect(result).toEqual(false);
});
it('a is string:)', () => {
    let result = compareSums('3', 2, 3, 1);
    expect(result).toEqual(false);
});
it('ab<bc', () => {
    let result = compareSums(1, 2, 1, 1);
    expect(result).toEqual(true);
});
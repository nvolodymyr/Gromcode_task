import { squareArray } from "./index";
it('not array', () => {
    let result = squareArray('bla bla bla');
    expect(result).toEqual(null);
});
it('correct excution', () => {
    let result = squareArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});
it('incorrect excution', () => {
    let result = squareArray([1, 2, 3]);
    expect(result).not.toEqual([1, 4, 6]);
});
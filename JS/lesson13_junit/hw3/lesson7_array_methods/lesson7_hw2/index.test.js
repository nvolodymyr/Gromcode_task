import { reverseArray } from "./index";
it('not array', () => {
    let res = reverseArray('dsds');
    expect(res).toEqual(null);
});
it('corect execution', () => {
    let res = reverseArray([1, 2, 3]);
    expect(res).toEqual([3, 2, 1]);
});
it('incorect execution', () => {
    let res = reverseArray([1, 2, 3]);
    expect(res).not.toEqual([2, 2, 1]);
});
import { findDivCount } from "./index";
it('n toEqual string', () => {
    let res = findDivCount(3, 4, 'dsd');
    expect(res).toEqual(null);
});
it('b less a ', () => {
    let res = findDivCount(3, 1, 5);
    expect(res).toEqual(0);
});
it('correcr execution ', () => {
    let res = findDivCount(1, 22, 2);
    expect(res).toEqual(11);
});
import { getAdults } from "./index";
it('correct argument', () => {
    let res = getAdults('bla bla bla...')
    expect(res).toEqual(null);
});
it('typeOf return value', () => {
    let res = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
    let type = typeof res === 'object';
    expect(type).toEqual(true);
});
it('return correct value', () => {
    let res = getAdults({ 'John Doe': 19, 'Tom': 17, 'Bob': 18 });
    expect(res).toEqual({ 'John Doe': 19, 'Bob': 18 });
});
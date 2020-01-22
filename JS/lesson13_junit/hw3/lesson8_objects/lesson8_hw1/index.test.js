import { pickProps } from "./index";
it('array is not array', () => {
    let res = pickProps({ a: 3, b: 3, c: 7 }, 'dsdssd');
    expect(res).toEqual(null);
});
it('array is array', () => {
    let res = pickProps({ a: 3, b: 3, c: 7 }, ['a']);
    expect(res).toEqual({ a: 3 });
});
it('typeOf object', () => {
    let res = pickProps({ a: 3, b: 3, c: 7 }, ['a']);
    let triger = typeof res === 'object';
    expect(triger).toEqual(true);
});
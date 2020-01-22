import { increaser } from "./index";
it('a less index', () => {
    let result = increaser(3, 10);
    expect(result).toEqual(3);
});
it('a biger than index', () => {
    let result = increaser(5, 4);
    expect(result).toEqual(9);
});
it('a is string', () => {
    let result = increaser('33', 4);
    expect(result).toEqual(null);
});
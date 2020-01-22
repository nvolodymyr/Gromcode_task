import { getSum } from './index';
it('неправильная сумма парних елементів 12 not 13', () => {
    let sum = getSum(1, 6);
    expect(sum).not.toEqual(13);
});
it('немає другого параметру', () => {
    let sum = getSum(1, );
    expect(sum).toEqual(0);
});
it('другий параметр 0', () => {
    let sum = getSum(3, 0);
    expect(sum).toEqual(0);
});
export function findDivCount(a, b, n) {
    if (typeof n !== 'number') return null;
    let count = 0;
    for (let index = a; index <= b; index++) {
        if (index % n === 0) {
            count++;
        }
    }
    return count;
}
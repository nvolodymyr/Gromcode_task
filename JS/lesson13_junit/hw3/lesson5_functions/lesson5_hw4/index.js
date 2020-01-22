let sum = (from, to) => {
    if (typeof from !== 'number') return null;
    let sum = 0;
    for (let index = from; index <= to; index++) {
        sum += index;

    }
    return sum;
}

export function compareSums(a, b, c, d) {
    return sum(a, b) > sum(c, d) ? true : false;
}
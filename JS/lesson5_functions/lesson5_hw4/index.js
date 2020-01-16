let sum = (from, to) => {
    let sum = 0;
    for (let index = from; index <= to; index++) {
        sum += index;

    }
    return sum;
}

function compareSums(a, b, c, d) {
    return sum(a, b) > sum(c, d) ? true : false;
}
function getSum(a, b) {
    let sum = 0;
    for (let index = a; index <= b; index++) {
        if (index % 2 === 0) {
            sum += index;
        }

    }
    return sum;
}
function getSum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
    arr.forEach(elem => sum += elem);
    return sum;
}
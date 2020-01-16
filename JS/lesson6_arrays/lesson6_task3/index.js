function getSpecialNumbers(m, n) {
    let newArray = [];
    for (let index = m; index <= n; index++) {
        if (index % 3 === 0) {
            newArray.push(index);
        }

    }
    return newArray;
}
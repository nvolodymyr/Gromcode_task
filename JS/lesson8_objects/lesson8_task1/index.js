let transformToObject = (arr) => {
    let newObj = {};
    for (const iterator of arr) {
        newObj[iterator] = iterator;
    }
    return newObj;
}
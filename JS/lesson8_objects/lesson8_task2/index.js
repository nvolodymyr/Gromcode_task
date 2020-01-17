function concatProps(object) {
    let newArray = [];
    for (const iterator in object) {
        newArray.push(object[iterator]);
    }
    return newArray;
}
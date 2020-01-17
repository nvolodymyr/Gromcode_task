function concatProps(object) {
    let newArray = [];
    for (const iterator of object) {
        newArray.push(iterator);
    }
    return newArray;
}
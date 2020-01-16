function cloneArr(array) {
    if (!Array.isArray(array)) return null;
    let cloneArray = array.map(elem => elem);
    return cloneArray;
}
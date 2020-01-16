function getSpecialNumbers(array) {
    if (!Array.isArray(array)) return null;

    let newArray = array.map(elem => elem % 3 === 0);
    return newArray;
}
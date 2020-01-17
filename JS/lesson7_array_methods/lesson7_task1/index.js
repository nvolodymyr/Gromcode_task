function getSpecialNumbers(array) {
    if (!Array.isArray(array)) return null;

    let newArray = array.filter(elem => elem % 3 === 0);
    return newArray;
}
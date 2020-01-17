function sortDesc(array) {
    if (!Array.isArray(array)) return null;
    let newArray = array.sort((a, b) => b - a);
    return newArray;
}
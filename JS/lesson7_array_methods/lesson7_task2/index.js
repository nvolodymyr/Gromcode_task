function sortDesc(array) {
    if (!Array.isArray(array)) return null;
    return array.slice().sort((a, b) => b - a);
}
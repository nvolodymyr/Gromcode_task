function sortDesc(array) {
    if (!Array.isArray(array)) return null;

    return array.sort((a, b) => b - a);
}
let countOccurrences = (longStr, shortStr) => {
    if (shortStr.length === 0) return null;
    return longStr.split(shortStr).length - 1;
}
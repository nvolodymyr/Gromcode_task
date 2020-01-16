let reverseArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let [...newArray] = arr
    return newArray.reverse();
}
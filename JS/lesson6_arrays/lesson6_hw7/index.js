function checker(array) {
    if (!Array.isArray(array)) return null;
    let max = array[0];
    let min = array[0];

    for (let index = 0; index < array.length; index++) {
        if (array[index] > max) {
            max = array[index];
        }
        if (array[index] < min) {
            min = array[index];
        }
    }
    return (max + min > 1000) ? true : false;
}
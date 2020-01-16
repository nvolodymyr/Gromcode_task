function uniqueCount(array) {
    if (!Array.isArray(array)) return null;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let triger = false;
        for (let j = 0; j < array.length; j++) {
            if (array[i] == newArray[j]) {
                triger = true;
            }

        }
        if (!triger) {
            newArray.push(array[i]);
        }


    }
    return newArray;

}
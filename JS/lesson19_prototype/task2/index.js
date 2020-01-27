export let getOwnProps = (obj) => {
    let newArray = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] !== 'function') {
            newArray.push(key);

        }
    }
    return newArray;
}
export function getAdults(object) {
    if (typeof object !== 'object') return null;
    let newObj = {};
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key] >= 18) {
                newObj[key] = object[key];
            }

        }
    }
    return newObj;
}
export function pickProps(obj, array) {
    if (!Array.isArray(array)) return null;
    return array.reduce((acum, elem) => {
        for (const key in obj) {
            if (key === elem) {
                acum[elem] = obj[key];
            }
        }
        return acum;
    }, {});
}
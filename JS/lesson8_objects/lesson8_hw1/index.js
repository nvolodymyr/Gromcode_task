function pickProps(obj, array) {
    return array.reduce((acum, elem) => {
        for (const key in obj) {
            if (key === elem) {
                acum[elem] = obj[key];
            }
        }
        return acum;
    }, {});
}
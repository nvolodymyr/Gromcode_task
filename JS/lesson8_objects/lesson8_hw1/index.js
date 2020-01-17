function pickProps(obj, array) {
    return array.reduce((acum, elem) => {
        for (const key in obj) {
            if (object.hasOwnProperty(key)) {
                if (key === elem) {
                    acum[elem] = obj[key];
                }

            }
        }
        return acum;
    }, {})
}
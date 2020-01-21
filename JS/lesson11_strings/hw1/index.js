let splitStrin = (str, digits = 10) => {
    if (typeof str !== 'string') return null;
    const strArray = [];
    let triger = 0;
    while (true) {
        let chunk = str.substr(triger, digits)
        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < digits) {
            chunk = chunk + '.'.repeat(digits - chunk.length);
        }
        strArray.push(chunk);
        triger += digits;

    }
    return strArray;
}
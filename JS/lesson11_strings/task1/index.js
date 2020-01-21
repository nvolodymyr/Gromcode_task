let splitText = (str, digits) => {
    if (typeof str !== 'string') return null;
    const strArray = [];
    let triger = 0;
    while (true) {
        let chunk = str.substr(triger, digits)
        if (chunk.length === 0) {
            break;
        }
        strArray.push(chunk[0].toUpperCase() + chunk.slice(1));
        triger += digits;

    }
    return strArray.join('\n');
}
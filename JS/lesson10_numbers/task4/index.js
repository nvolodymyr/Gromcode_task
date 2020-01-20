let getMaxAbsoluteNumber = (arr) => {
    if (!Array.isArray(arr)) return null;
    const absoluteValues = arr.map(elem => Math.abs(elem));
    let maxELement = Math.max(...absoluteValues);
    return maxELement;
}
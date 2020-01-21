export default (arr) => {
    if (arr.length === 0 || !Array.isArray(arr)) return null;
    let sortArr = arr.map(elem => Math.abs(elem)).sort((a, b) => a - b);
    return Math.pow(sortArr[0], 2);
};
export let getOddNumbers = arr => {
    return arr.filter(elem => elem % 2 !== 0);
}
export let getSquaredArray = arr => {
    return arr.map(elem => elem * elem);
}

export default (a, b) => a + b;
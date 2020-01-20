let getFiniteNumbers = (arr) => {
    return arr.filter(elem => Number.isFinite(elem));
}
let getFiniteNumbers = (arr) => arr.filter(elem => Number.isFinite(elem));
let getFiniteNumbersV2 = (arr) => arr.filter(elem => isFinite(elem));
let getNaN = (arr) => arr.filter(elem => Number.isNaN(elem));
let getNaNV2 = (arr) => arr.filter(elem => isNaN(elem));
let getIntegers = (arr) => arr.filter(elem => Number.isInteger(elem));
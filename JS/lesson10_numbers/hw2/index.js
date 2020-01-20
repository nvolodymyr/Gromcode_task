let getRandomNumbers = (lengArray, numberStart, numberFinish) => {
    const notExistDigits = (numberFinish - numberStart < 1) && Math.ceil(end) === Math.ceil(start);
    if (lengArray <= 0 || (numberFinish < numberStart) || notExistDigits) { return null; }
    let newArray = [];
    for (let index = 0; index < lengArray; index++) {
        newArray[index] = Math.floor(Math.random() * (numberFinish - numberStart) + numberStart)
    }
    return newArray;
}
let multiRound = (elem) => {
    return [
        Math.floor((elem * 1000)) / 1000,
        Math.round((elem * 1000)) / 1000,
        Math.ceil((elem * 1000)) / 1000,
        Math.trunc(elem), +elem.toFixed(2)
    ]
}
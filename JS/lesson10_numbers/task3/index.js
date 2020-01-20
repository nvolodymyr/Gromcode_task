let multiRound = (elem) => {
    return [
        Math.floor(elem * 100) / 100,
        Math.round(elem * 100) / 100,
        Math.ceil(elem * 100) / 100,
        Math.trunc(elem * 100) / 100, +elem.toFixed(2)
    ]
}
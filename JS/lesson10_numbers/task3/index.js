let multiRound = (elem) => {
    return [
        Math.floor(elem),
        Math.round(elem),
        Math.ceil(elem),
        Math.trunc(elem),
        elem.toFixed(2)


    ]
}
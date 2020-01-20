let superRoun = (numb, fraction) => {
    let transformFraction = Math.pow(10, fraction);
    return [
        Math.floor(elem * transformFraction) / transformFraction,
        Math.round(elem * transformFraction) / transformFraction,
        Math.ceil(elem * transformFraction) / transformFraction,
        Math.trunc(elem * transformFraction) / transformFraction, +elem.toFixed(fraction)
    ]
}
d
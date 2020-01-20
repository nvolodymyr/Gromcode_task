let superRound = (numb, fraction) => {
    let transformFraction = Math.pow(10, fraction);
    return [
        Math.floor(numb * transformFraction) / transformFraction,
        Math.round(numb * transformFraction) / transformFraction,
        Math.ceil(numb * transformFraction) / transformFraction,
        Math.trunc(numb * transformFraction) / transformFraction, +numb.toFixed(fraction)
    ]
}
let getAdults = (obj) => {
    return Object.entries(obj).filter(elem => elem[1] >= 18).map(elem => elem[0]);
}
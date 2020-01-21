let cleanTransactionsList = arr => {
    return arr.filter(elem => typeof + elem === 'number' && !isNaN(elem)).map(elem => `$${(+elem).toFixed(2)}`);
}
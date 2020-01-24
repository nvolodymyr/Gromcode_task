export let sumOfSquares = (...args) => {
        return args.reduce((accum, elem) => {
            return accum += elem * elem;
        }, 0)
    }
    // console.log(sumOfSquares(3, 4, 5, 6));
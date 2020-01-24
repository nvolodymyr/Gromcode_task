export let spy = (callback) => {
    return function wrapFunction(...argum) {
        wrapFunction.calls = [];
        wrapFunction.calls.push(argum)
        return callback.apply(this, argum)
    }

}
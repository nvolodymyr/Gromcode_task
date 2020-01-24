export let spy = (callback) => {
    wrapFunction.calls = [];
    return function wrapFunction(...argum) {
        wrapFunction.calls.push(argum)
        return callback.apply(this, argum)
    }

}
export let spy = (callback) => {
    wrapFunction.calls = [];

    function wrapFunction(...argum) {
        wrapFunction.calls.push(argum)
        return callback.apply(this, argum)
    }
    return wrapFunction;
}
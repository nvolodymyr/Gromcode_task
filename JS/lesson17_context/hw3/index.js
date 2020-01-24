export function bind(func, context, ...args) {
    return function() {
        return func.call(context, ...args)
    }
}
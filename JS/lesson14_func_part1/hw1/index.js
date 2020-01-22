let memory = 0;
let add = (n) => {
    memory += n;
}
let decrease = (n) => {
    memory -= n;
}
let reset = () => {
    memory = 0;
}
let getMemo = () => {
    return memory;
}
export { add, decrease, reset, getMemo };
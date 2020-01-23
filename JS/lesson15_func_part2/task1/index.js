let makeCounter = () => {
    let count = 0;
    return function increment() {
        return count++;
    }
}
export { makeCounter };
// let g1 = makeCounter();
// console.log(g1());
// console.log(g1());
// console.log(g1());
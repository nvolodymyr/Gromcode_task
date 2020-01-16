let swap = (arr) => {
    let [firstElementOFArray, ...lastElements] = arr;
    return [...lastElements, firstElementOFArray];
}
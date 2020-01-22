export let increaser = (a, index) => {
    if (typeof a !== 'number' || typeof index !== 'number') return null;
    if (a > index) {
        return a += index;
    } else {
        return a;
    }
}
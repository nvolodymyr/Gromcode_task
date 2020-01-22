export function getPrimes(n) {
    if (n <= 0 || typeof n != 'number') return null;
    for (let index = 1; index <= n; index++) {
        if (isPrimes(index)) {
            console.log(index);
        }

    }
}

function isPrimes(num) {
    for (let index = 2; index < num; index++) {
        if (num % index === 0) {
            return false;
        }

    }
    return true;
}
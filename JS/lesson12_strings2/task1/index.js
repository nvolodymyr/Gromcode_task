let calc = str => {
    let a = str.split('');
    let result = null;
    switch (a[1]) {
        case '+':
            result = +a[0] + a[2];
            break;
        case '-':
            result = a[0] - a[2];
            break

        case '/':
            result = a[0] / a[2];
            break

        case '*':
            result = a[0] * a[2];
            break

    }
    return `${str}=${result}`;
}
console.log(calc('1+3'));
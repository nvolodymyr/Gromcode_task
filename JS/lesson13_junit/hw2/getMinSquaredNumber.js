export let calc = str => {
    if (typeof str !== 'string') return null;
    const [a, operator, b] = str.split(' ');
    let result;
    switch (operator) {
        case '+':
            result = +a + +b;
            break;
        case '-':
            result = a - b
            break;

        case '/':
            result = a / b
            break;

        case '*':
            result = a * b;
            break;

    }
    return `${str} = ${result}`;
}
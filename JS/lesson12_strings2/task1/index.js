let calc = str => {
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
    // console.log(calc('1+3'));
    //пробіл в дорівнює ск.
let calc = str => {
        const [a, operator, b] = expression.split(' ');
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
        return `${str}=${result}`;
    }
    // console.log(calc('1+3'));
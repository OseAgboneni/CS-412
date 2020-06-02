
const evaluate = str => {

    const operator = str.split('')[1];

    switch(operator){

        case '+':
            return (expression) => {
                return Number(expression.charAt(0)) + Number(expression.charAt(2));
            }
            break;

        case '-':
            return (expression) => {
                return Number(expression.charAt(0)) - Number(expression.charAt(2));
            }
            break;

        case '*':
            return (expression) => {
                return Number(expression.charAt(0)) * Number(expression.charAt(2));
            }
            break;

        case '/':
            return (expression) => {
                return Number(expression.charAt(0)) / Number(expression.charAt(2));
            }
            break;
    }
}

const expression = '8/2';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)

module.exports = {evaluate};
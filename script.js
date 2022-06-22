// program for a simple arithmetic calculator
let result;

// take the operand input
const number1 = parseFloat(window.prompt('Enter first number: '));
const number2 = parseFloat(window.prompt('Enter second number: '));

// take the operator input
const operator = window.prompt('Enter operator ( either +, -, * or / ): ');


switch(operator) {
    case '+':
         result = number1 + number2;
        alert(`${result}`);
        break;

    case '-':
         result = number1 - number2;
        alert(`${result}`);
        break;

    case '*':
         result = number1 * number2;
        alert(`${result}`);
        break;

    case '/':
         result = number1 / number2;
        alert(`${result}`);
        break;

    default:
        alert('Invalid operator');
        break;
}

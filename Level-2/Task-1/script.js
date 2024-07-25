document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    let currentInput = '0';
    let previousInput = '';
    let operator = null;
    let shouldResetDisplay = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (button.classList.contains('operator')) {
                handleOperator(value);
            } else if (button.id === 'clear') {
                clear();
            } else if (button.id === 'equals') {
                evaluate();
            } else {
                appendNumber(value);
            }
            updateDisplay();
        });
    });

    function handleOperator(nextOperator) {
        if (currentInput === '' || (nextOperator === '-' && (operator === null || operator === '='))) {
            // Handle negative numbers
            currentInput = nextOperator;
        } else if (previousInput !== '') {
            evaluate();
        }
        operator = nextOperator;
        previousInput = currentInput;
        currentInput = '';
        shouldResetDisplay = false;
    }

    function appendNumber(number) {
        if (currentInput === '0' || shouldResetDisplay) {
            currentInput = number;
            shouldResetDisplay = false;
        } else {
            currentInput += number;
        }
    }

    function clear() {
        currentInput = '0';
        previousInput = '';
        operator = null;
        shouldResetDisplay = false;
    }

    function evaluate() {
        if (operator === null || shouldResetDisplay) return;
        if (operator === '/' && currentInput === '0') {
            alert("Cannot divide by zero");
            clear();
            updateDisplay();
            return;
        }
        currentInput = operate(previousInput, currentInput, operator);
        operator = null;
        previousInput = '';
        shouldResetDisplay = true;
    }

    function operate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return (a + b).toString();
            case '-':
                return (a - b).toString();
            case '*':
                return (a * b).toString();
            case '/':
                return (a / b).toString();
            default:
                return b.toString();
        }
    }

    function updateDisplay() {
        display.textContent = currentInput;
    }

    clear();
});

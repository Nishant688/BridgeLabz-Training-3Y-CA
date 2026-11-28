/**
 * Question 9: Random Math Quiz Generator
 * Generates dynamic arithmetic expressions with random numbers and operators, evaluating via switch.
 */

function generateQuizQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = parseFloat((num1 / num2).toFixed(2));
            break;
        default:
            result = 0;
    }

    return {
        Question: `What is ${num1} ${operator} ${num2}?`,
        Answer: result
    };
}

console.log("=== Random Math Quiz Generator ===");
const quizSet = [];
for (let i = 1; i <= 5; i++) {
    quizSet.push(generateQuizQuestion());
}
console.table(quizSet);

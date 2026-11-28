/**
 * Question 3: Math Utility Dashboard
 * Evaluates various mathematical calculations using JavaScript Math object methods and template literals.
 */

function generateMathDashboard(x = 17.75) {
    const rounded = Math.round(x);
    const squareRoot = Math.sqrt(x).toFixed(4);
    const cubedPower = Math.pow(x, 3).toFixed(2);
    // Random integer between 10 and 50 (inclusive)
    const randomBetween10and50 = Math.floor(Math.random() * 41) + 10;

    const summary = `
============================================
           MATH UTILITY DASHBOARD           
============================================
  Input Number (x)       : ${x}
  Rounded Value          : ${rounded}
  Square Root (√x)        : ${squareRoot}
  Cubed Power (x³)        : ${cubedPower}
  Random Integer (10-50) : ${randomBetween10and50}
============================================`;

    console.log(summary);
}

generateMathDashboard(17.75);

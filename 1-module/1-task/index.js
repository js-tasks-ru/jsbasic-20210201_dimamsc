/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let counter = 1;
    let value;

    if (n == 0 || n == 1) {
        value = 1;
    } else {
        value = n;
        ы;
        while (n > counter) {
            value = value * (n - counter);
            counter++;
        }
    }

    console.log(value);
}
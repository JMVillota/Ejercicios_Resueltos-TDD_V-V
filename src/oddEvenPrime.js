// Deber Jmvillota
/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
- If number is odd print 'Odd' instead of the number.
- If number is even print 'Even' instead of number.
- Print number as a string, if number is Prime.
 */

const game = (ini, fin) => {
    let result = ''
    for (; ini <= fin; ini++) {
        result += isOdd_Even(ini);
        result += isPrime(ini);
        result += ',';
    }
    return result;
}

const isOdd_Even = num => {
    if (num % 2 === 0) {
        return "Even ";
    } else
        return "Odd ";
}

const isPrime = num => {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return "";
        }
    }
    return "Prime";
}

export { game };
// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 *
 * @param {number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
export function sumOfNumbersTo(destination) {
    console.log(destination)

    if (destination < 1) {
        throw new Error('Destination must be at least 1')
    }

    let sum = 0
    for (let i = 1; i <= destination; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumbersTo(10))

/**
 * Challenge - 2
 *
 * Calculate count, sum and put each even number in an array, from 0 to a destination. The returned object should have the following keys: count, sum, arrayOfEvenNumbers.
 *
 * @param {number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
export function evenNumbersWithin(destination) {
    console.log(destination)
    // get the number from 0 to destination

    if (destination < 1) {
        throw new Error('Destination must be at least 1')
    }
    let sum = 0
    const arrayOfEvenNumbers = []

    for (let i = 0; i <= destination; i++) {
        if (i % 2 === 0) {
            sum += i
            arrayOfEvenNumbers.push(i)
        }
    }
    const count = arrayOfEvenNumbers.length

    return {
        count,
        sum,
        arrayOfEvenNumbers,
    }
}
console.log(evenNumbersWithin(10))

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
export function celsiusToFahrenheit(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    const result = []
    for (const celsius of arrayOfNumbers) {
        const fahrenheit = (celsius * 9 / 5) + 32
        result.push(Math.round(fahrenheit))
    }
    return result
}
console.log(celsiusToFahrenheit([0, 20, 30, 100]))

/**
 * Challenge - 4
 *
 * Calculates the count and sum of odd numbers from 0 to the given destination.
 * Stores each odd number in an array. Returns an object with count, sum, and arrayOfOddNumbers.
 *
 * @param {number} destination the destination number
 * @returns {object} the count, sum, and arrayOfOddNumbers
 */
export function oddNumbersWithin(destination) {
    console.log(destination)
    // get the number from 0 to destination
    if (destination < 1) {
        throw new Error('Destination must be less than 1')
    }

    let sum = 0
    const arrayOfOddNumbers = []

    for (let i = 1; i <= destination; i++) {
        if (i % 2 !== 0) {
            sum += i
            arrayOfOddNumbers.push(i)
        }
    }

    const count = arrayOfOddNumbers.length

    return {
        count,
        sum,
        arrayOfOddNumbers,
    }
}
console.log(oddNumbersWithin(10))

/**
 * Challenge - 5
 *
 * Given an array of numbers, find all numbers that are multiples of a given factor.
 * Return an object containing the count of multiples, their sum, and an array of the multiples.
 *
 * @param {Array} arrayOfNumbers the array of numbers to check
 * @param {number} factor the factor to check multiples for
 * @returns {object} the count, sum, and arrayOfMultiples
 */
export function findMultiples(arrayOfNumbers, factor) {
    console.log(arrayOfNumbers, factor)

    if (!Array.isArray(arrayOfNumbers)) {
        throw new TypeError('First argument must be an array of numbers')
    }
    if (typeof factor !== 'number' || factor === 0) {
        throw new Error('Factor must be a non-zero number')
    }

    let sum = 0
    const arrayOfMultiples = []

    for (const num of arrayOfNumbers) {
        if (num % factor === 0) {
            sum += num
            arrayOfMultiples.push(num)
        }
    }

    const count = arrayOfMultiples.length

    return {
        count,
        sum,
        arrayOfMultiples,
    }
}
console.log(findMultiples([3, 4, 6, 9, 12], 3))

/**
 * Challenge - 6
 *
 * Given an array of numbers, calculate the factorial of each number and return a new array.
 * The factorial of a number n is the product of all positive integers less than or equal to n.
 * For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 * Note: 0! = 1 and negative numbers should return 0.
 *
 * @param {Array} arrayOfNumbers the array of numbers to calculate factorials for
 * @returns {Array} the array of factorial results
 */
export function calculateFactorials(arrayOfNumbers) {
    console.log(arrayOfNumbers)
    if (!Array.isArray(arrayOfNumbers)) {
        throw new TypeError('Input must be an array of numbers')
    }

    const result = []

    // helper function for factorial
    const factorial = (n) => {
        if (n < 0)
            throw new Error('Factorial is not defined for negative numbers')
        if (n === 0 || n === 1)
            return 1

        let product = 1
        for (let i = 2; i <= n; i++) {
            product *= i
        }
        return product
    }

    for (const num of arrayOfNumbers) {
        result.push(factorial(num))
    }

    return result
}
console.log(calculateFactorials([0, 1, 3, 5]))

/**
 * Challenge - 7
 *
 * Given an array of numbers, find all prime numbers and return an object containing
 * the count of primes, their sum, and an array of the prime numbers found.
 * A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 *
 * @param {Array} arrayOfNumbers the array of numbers to check for primes
 * @returns {object} the count, sum, and arrayOfPrimes
 */
export function findPrimeNumbers(arrayOfNumbers) {
    console.log(arrayOfNumbers)

    // write your code here
    if (!Array.isArray(arrayOfNumbers)) {
        throw new TypeError('Input must be an array of numbers')
    }

    const arrayOfPrimes = []

    // Helper function to check primality
    const isPrime = (n) => {
        if (n <= 1)
            return false // 0 and 1 are not prime numbers
        if (n === 2)
            return true // 2 is prime number
        if (n % 2 === 0)
            return false // even numbers > 2 are not prime

        // check odd divisors up to sqrt(n)
        for (let i = 3; i * i < n; i += 2) {
            if (n % i === 0)
                return false
        }
        return true
    }

    for (const num of arrayOfNumbers) {
        if (isPrime(num)) {
            arrayOfPrimes.push(num)
        }
    }

    const count = arrayOfPrimes.length
    const sum = arrayOfPrimes.reduce((acc, val) => acc + val, 0)

    return {
        count,
        sum,
        arrayOfPrimes,
    }
}
console.log(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

/**
 * Challenge - 8
 *
 * Given an array of numbers, return the double of the values
 *
 * @param {Array} arrayOfNumbers the array of numbers to double
 * @returns {Array} the array of doubled numbers
 */
export function doubleTheValues(arrayOfNumbers) {
    console.log(arrayOfNumbers)

    if (!Array.isArray(arrayOfNumbers)) {
        throw new TypeError('Input must be an array of numbers')
    }

    const result = []

    for (const num of arrayOfNumbers) {
        result.push(num * 2)
    }

    return result
}
console.log(doubleTheValues([1, 2, 3, 4]))

// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================

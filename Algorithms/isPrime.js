// function to check given number is prime
const isPrime = (number = null) => {

    if(number === null || number < 2) return false
    for(let i = 2; i < Math.sqrt(number); i++) if(number % i == 0) return false
    return true

}
//test cases
console.log(isPrime(1)) //false
console.log(isPrime('')) //false
console.log(isPrime(2)) //true
console.log(isPrime(7)) //true
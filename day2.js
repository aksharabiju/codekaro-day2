//Assignment 1:
//Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
function number(n){
    if (n>0){
        console.log("positive")
    }
    else if(n==0){
        console.log("zero")
    }
    else{
        console.log("negative")
    }
}
number(-5)
    
//Assignment 2:
//Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
function fact(n){
    fact=1
    for(i=1;i<=n;i++){
        fact=fact*i
    }
    console.log(fact)
}
fact(5)

//Assignment 3:
//Write a JavaScript function that takes two numbers as parameters and returns the larger one.
function largerNo(num1,num2){
    if(num1>num2){
        console.log(num1)
    }
    else{
        console.log(num2)
    }
}
largerNo(9,7)

//Assignment 4:
//Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
function isPal(str){
    len=str.length
    for(let i=0;i<len;i++){
        if(str[i]!=str[len-1-i]){
            console.log("not palindrome")
        }
        else{
            console.log("palindrome")
        }
        
    }
}
isPal("malayalam")
//Assignment 5:
//Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
function printPrimesUpToN(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }
}
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num);i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
printPrimesUpToN(20);

//Assignment 6:
//Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
function Calc(num1,num2){
    let sum=num1+num2
    let diff=num1-num2
    let prdt=num1*num2
    let quo=num1/num2
    console.log('sum='+sum,'diff='+diff,'prdt='+prdt,'quo='+quo)
    
}
Calc(4,2)

//Assignment 7:
//Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.
function vowelCount(string){
    let len = string.length;
    let count=0;

    for(let i=0; i<len; i++){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'|| string[i] == 'A' || string[i] == 'E' || string[i] == 'I' || string[i] == 'O' || string[i] == 'U'){
            count = count+1;
        }
    }
    console.log("Vowels count = "+count);
}
vowelCount('akshara');

//Assignment 8:
//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
function isPerfectNumber(number) {
    if (number <= 0) {
        return false;
    }
    let divisorSum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            divisorSum += i;
        }
    }
    console.log(divisorSum==number)
}
isPerfectNumber(50)
//Assignment 9:
//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
function printFibonacci(n) {
    let a = 0, b = 1, c;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
      c = a + b;
      console.log(c);
      a = b;
      b = c;
    }
  }
  printFibonacci(10)
//Assignment 10:
//Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
function makeTable(num){
    for(let i=1; i<=10; i++){
        console.log(num+"*"+i+" = "+ (num*i))
    }
}

makeTable(5);

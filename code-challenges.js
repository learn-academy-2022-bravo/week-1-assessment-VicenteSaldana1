// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
//
// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
//
//
//
// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"
//
// // // Pseudo Code for Question 1
// // // Create a Function
// // // input is temparature compared to boiling point
// // // conditional statement to know if temparature is at, above, or below boiling point
// // // return string with boiling point status
// // // invoke function with variables as an argument
//
const temp1 = 42
const temp2 = 350
const temp3 = 212
//
 const anyGivenNumber = (temparature) => {
    if (temparature === 212){
    return `${temparature} is at boiling point`
  } else if (temparature > 212){
    return `${temparature} is above boiling point`
  } else if (temparature < 212){
      return `${temparature} is below boiling point`
  }
}
console.log(anyGivenNumber(temp1))
console.log(anyGivenNumber(temp2))
console.log(anyGivenNumber(temp3))
// Output -->
// 42 is below boiling point
// 350 is above boiling point
// 212 is at boiling point
//
//
//
// // --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
//
// // // Pseudo Code for Question 2
// // // must combine/merge --> (concat) the two arrays and leave the OG array unchanged
// // // will need to create a new variable for the combined array to run and leave OG the same
// // // Return the length (10) --> must use .length in my console log for this to happen
//
const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]
let joinedNumbers = myNumbers1.concat(myNumbers2)
console.log(joinedNumbers.length)
// OUTPUT -->
// 10
//
//
//
// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"
//
// // // Pseudo Code for Question 3
// // // must reverse the letters of a string -- will likely use .reverse ()
// // //.reverse only works on arrays, therefore, will need to convert string to an array first
// // // will do this using .split()
// // // will need to join the items in the array back into a string by using .join ()
// // // Return the string words reversed --> 2202 ovarB
 //
const currentCohort = "Bravo 2022"
const splitWords = currentCohort.split ('')
const reverseWords = splitWords.reverse ()
const result = reverseWords.join ('')
console.log(result)
// // OUTPUT -->
// // 2202 ovarB
//
//
//
// // --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
// // // Pseudo Code
// // // write a statement that will evaluate the values in our array as odd or even
// // // To do this, we will likely use the modulus operator to determine odd or even
// // // if, else statements since we are comparing whether the numbers are even or odd
// // // for loop - since we are asking to perform an action on each individual number in our array
// // // Expected output: "odd" "even" "odd" "even" "odd" "even"
//
 const myArray = [13, 34, 5, 10, 27, 42]
  for (let i=0; i<= 5; i++){
     if (i % 2 == 0){
       console.log("odd");
   } else {
     console.log("even");
 }
}
// OUTPUT -->
// odd
// even
// odd
// even
// odd
// even
//
//
//
// // --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3
// // // Pseudo Code
// // // create a function
// // // input is the set of any two numbers that subtracts the smaller number from the bigger number using the variables provided
// // // my function must have a parameter and invocation that subtracts the two numbers in the variables
// // // result should be the difference of those two numbers
//
// Set one:
const number1 = 58
const number2 = 100
//
// Set two:
const number3 = 27
const number4 = 24
//
const subtract = (numbers) => {
  return `${numbers}`
}
const subtract2 = (numbers) => {
  return `${numbers}`
}
//
console.log(subtract (100 - 58))
console.log(subtract2 (27 - 24))
// OUTPUT -->
// 42
// 3

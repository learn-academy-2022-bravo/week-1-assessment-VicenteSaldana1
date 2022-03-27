// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))
//
// // a) Your answer: I predict the outcome of the above code will be : 5. I believe this to be true because the mutator built-in method of .push, always produces the output of the length of the new array. Therefore, since we added the word indigo to the existing array that was set at 4, the new output after adding this new word should be 5.
// // b) Verify and explain: Output was indeed 5, for reasons provided in my predicted answer.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: The output should be a number representing the length of the phrase in our variable's data. In this case I counted 10 characters- taking into account that strings begin at index 0 and move forward.
// b) Verify and explain: After verifying the output, it was indeed 10. I went back to our lecture notes and confirmed that 'strings have a length property and each character in the string can be accounted for by its placement called an index. Strings are zero indexed meaning the counting of the characters starts at 0 and moves forward.'


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: In this code block, I believe the output will be the first letter o in our variable's data string because the consolo log is referencing a single character from the string. In this case, it is referencing the index of 4 in our variables data and as I had mentioned in question 1, strings are zero indexed.
// b) Verify and explain: I verified the output and confirmed that my prediction was correct. The output log showed the letter o, since our log is referencing a single character from the string by its index of 4.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: I predict that the output of this code will be "Ruby" since our log is referencing the variable data indexed at 1. If we start counting the data in our array from 0-3, left to right, we will see that at index 1, the word Ruby is located.
// b) Verify and explain: After verifying the code log, I was able to confirm that my response was correct. I went back to my lecture notes and noticed that a similar example had been provided where I was ble to again confirm that my logic behind my prediction was accurate.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: I predict that the output of this code will be either an error or some other sort of negative response letting me know that an array cannot take on a method/command that is meant for a string. I would have likely missed this answer if it were not for the similar question we had in our weekly assessment for this week where we had to convert an array into a string prior to executing a buil-in method that only works on strings.
// b) Verify and explain: After verifying the output, it was indeed an error and it showed that 'toUpperCase' is not a valid function. Looking back at our lecture notes, I would have to convert the array into a string if I want the words saturday and sunday to be uppercased and for this code to execute.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: I predict the output of this code will maybe be the number of elements in the array, which is 3. However, this is the first time I see the phrase typeof posted in the console log, so I am not exactly sure what the complete output will be. Something tells me it could be different than my prediction, but I honestly don't know what that would be. Will likely need clarification on this in the future from an instrcutor.
// b) Verify and explain: The output was "number", which I did not predict. I made some research on what typeof means in js and found that the typeof operator is followed by an operand, which is an expression representing the object or primitive whose type is to be returned. It is my understanding then that the return of 'number' from this code is due to the fact that .length in this code will return the number of elements in the array (3), however, since the character 3 is a type of number, the included operator of typeof in our console will then produce the type of object or primitive data it is. I am not sure if I am explaining this correctly but this is the way I understood what typeof will return.

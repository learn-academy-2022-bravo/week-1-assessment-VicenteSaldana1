# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

  Your answer:

  Researched answer:



1. What is git? What is the difference between git and Github?

  Your answer: Git stands for Global Information Tracker. It is a free and open sourced system used by programmers to save code at various stages of our projects in our local. Github, on the other hand, is stored remotely, on the web, and can be accessed by others. Github is more of a platform to store code online, while git is a software in our computer that will store code locally, at different stages of our project. Git is controlled through our terminal.

  Researched answer: After conducting some research, I found that Git is an open-source tool developers install locally to manage source code, while GitHub is an online service to which developers who use Git can connect and upload or download resources. Git is more of a tool, while Github is the service for projects that use Git. The main purpose of Git is to help developers save their projects/code at various stages of that project.



2. Which JavaScript operators will return a Boolean value?

  Your answer: Off the top of my head I can recall a few JS operators that will return a Boolean value, which are conditional statements, or if/else statements, those are: equality operators, logical operators, and relational operators.

  Researched answer: JavaScript conditionals always return a Boolean value. Conditional statements are of/else statements that include : relational operators (comparing two or more values), logical operators (uses and/or), and equality operators (includes both loose and strict equality operators, and compares one value to the other and judges if the values equate to the same thing). They are very helpful when making evaluations about data.



3. What is an index? What is the difference between index and value?

  Your answer: It is my understanding that Index is the location of a character within an array. While value is the content data inside each element in our array. The difference between index and value is that when logging for an index, we are trying to figure out the exact location of that character within our array, and when logging for value, we are asking to log the total number of elements in our array, not the location of those elements.


  Researched answer: In JavaScript, Index refers to the particular location of a value in an array. Indexes work as tracking systems that helps us log the exact locations of elements in our array. It is important to remember that arrays are zero indexed, which means the elements are numbered from left to right, starting from 0 and increase by 1 for each new element. Value, on the other hand, refers to the content inside of each element in our array. So in simple terms, value is the content inside an element, while index is the location of that value in our array.




4. What is iteration?

  Your answer: In JavaScript, Iteration refers to the action of doing something numerous times until a said condition is met. They are also referred to as loops.

  Researched answer: Iteration is the process of performing a particular action a certain number of times OR until a condition is met. [The OR part in the above line is really important and something I feel that I should have included in my answer but I only found this out after conducting this research].  
  A common form of iteration is called a for loop. A for loop defines a variable and increments or decrements the variable on each iteration. Many computer programs and programming languages use iterations to perform specific tasks, solve problems, and present solutions. The for statement creates a loop that is executed as long as a condition is true. The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false. Loops are a quick and easy way to perform a task repeatedly.



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: Based on my training with pair programming, the proper techniques for a successful pair programming experiences begin with establishing your roles as the driver and navigator. You typically want for one of the individuals in your group to be the hands-on coder, the one actually writing the code, while the other helps navigate through the project with hands off coding but providing instructions and guidance to the driver. For this to work, there needs to be really good communication between the driver and navigator throughout the duration of the pair programming experience.

  Researched answer: Pair programming is two people working together on one code source to collectively produce one program. Proper techniques of pair programming include the assignment of roles as the driver (person writing the code) and navigator (person providing instructions and higher-level input to the code). It is crucial to have good communication between the driver and navigator in order to have a successful pair programming experience. Other useful techniques to consider during pair programming include: back and forth exchange of ideas and thought process behind the code, communicate professionally, respect each other, be opened to feedback from your peer, and above all, have a good attitude!  



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: A “higher-order function” is a function that accepts functions as parameters and/or returns a function. In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well. This action is referred to as a 'higher-order function'.
<!-- I found this information from a useful source I've been utilizing called Codecademy, however, I did not entirely understand the concept and will need clarification once we revisit this type of function next week  -->


2. Jest: Jest is a JS testing framework that is designed to ensure the correctness of our JS code. We use it to write tests to make sure our JS programs are working correctly. It has an API that is well-documented and and well-maintained.

3. Objects: They are a type of variable used in JS that allows us to assign multiple values to it. For example: const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
The object here would be 'person', followed by its assigned values right after. Source: w3schools

4. Method: A JS method is an action that can be performed on an object. A JS method  
is a property containing a function definition. Methods are functions stored as object properties. Uses  the keyword (this). Source w3schools.

5. Classes: Javascript classes were introduced in ES6, which is a newer, updated version of JavaScript that is commonly used today. A JavaScript class is not an object, it is a template for JavaScript objects. When you have a class, you can use a class to create objects. To create a class, we must utilize the keyword class, and always add the method word --constructor ()--, which will help create the object.
example: class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
Source: w3schools.

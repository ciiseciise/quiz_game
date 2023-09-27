const prompt = require("prompt-sync")();

console.log("Welcome to the computer hardware quiz!")

const answer1 = prompt("What is the brain of the computer?: ");
const correct_answer1 = "CPU"

let correctAnswer = 0;
const totalQuestions = 3

if (answer1.toUpperCase() === correct_answer1) {
    console.log("You got it correct!")
    correctAnswer ++;
} else {
    console.log("You got it wrrong..."); 
}


const answer2 = prompt("What is better a 3090ti or 4060: ");
const correct_answer2 = "3090ti"


if (answer2.toLowerCase() === correct_answer2) {
    console.log("You got it correct!")
    correctAnswer ++;
} else {
    console.log("You got it wrrong..."); 
}

const answer3 = prompt("what is the recommended amount of RAM in 2023: ");
const correct_answer3 = "16GB"


if (answer3.toUpperCase() === correct_answer3) {
    console.log("You got it correct!")
    correctAnswer ++;
} else {
    console.log("You got it wrrong..."); 
}


console.log("You got", correctAnswer, "questions correct!")
console.log("You score", Math.round((correctAnswer / totalQuestions) * 100), "%!");
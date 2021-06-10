const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = (' ');

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space?");
let correctAnswer = ("Sally Ride");
let candidateAnswer = (" ");

let questions = ["Who was the first American woman in space?", "True or false: 5 kilometer == 5000 meters?", "(5 + 3)/2 * 10 = ?", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
//const candidateAnswers 

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name?" + candidateName);
}

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion(questions) {
for (let i = 0; i < questions.length; i++){
candidateAnswer = input.question(questions[i]);
candidateAnswers.push(candidateAnswer)
} 
 //console.log(candidateAnswers);
  //console.log(candidateAnswers.join(" "));
//console.log(`1. ${questions[0]}`);
  //console.log(`Your Answer: ${candidateAnswer}`);
  //console.log(`Correct Answer: ${correctAnswer}`);
  //console.log(`2. ${question2}`);
  //console.log(`Your Answer: ${candidateAnswer}`);
  //console.log(`Correct Answer: ${correctAnswer2}`)
  //console.log(`3. ${question3}`);
  //console.log(`Your Answer: ${candidateAnswer}`);
  //console.log(`Correct Answer: ${correctAnswer3}`)
  //console.log(`4. ${question4}`);
  //console.log(`Your Answer: ${candidateAnswer}`);
  //console.log(`Correct Answer: ${correctAnswer4}`)
  //console.log(`5. ${question5}`);
  //console.log(`Your Answer: ${candidateAnswer}`);
  //console.log(`Correct Answer: ${correctAnswer5}`)
}

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
function gradeQuiz(candidateAnswers) {
for (i = 0; i <questions.length; i++){
if (candidateAnswers[i] === correctAnswers[i])  {
    console.log(`You answered '${candidateAnswers[i]}'.  That's correct!`)
  } else {
    console.log(`You answered '${candidateAnswers[i]}'.  Incorrect. ${correctAnswers[i]} is the correct answer.`)
  }
}
  let grade;


  return grade;
}
//}
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hi, " + candidateName)
  askQuestion(questions);
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
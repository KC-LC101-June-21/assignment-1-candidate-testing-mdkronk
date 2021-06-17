const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = (' ');

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = (" ");

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let numOfCorrectAnswers = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name?");
}

// TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion(questions) {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer)
  }
  //console.log(candidateAnswers);
}

// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
function gradeQuiz(candidateAnswers) {
  for (i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numOfCorrectAnswers++;
      console.log(`${i + 1}. ${questions[i]} \nYour answer: ${candidateAnswers[i]}. \nCorrect answer:${correctAnswers[i]} \n\n`);

    } else {
      console.log(`${i + 1}. ${questions[i]} \nYour answer: '${candidateAnswers[i]}'.  \nCorrect answer: ${correctAnswers[i]} \n\n`)//
    }

  }

  let grade = (numOfCorrectAnswers / correctAnswers.length) * 100;
 
  if (grade >= 50) {
    console.log(`>>> Overall Grade: ${grade}% (${numOfCorrectAnswers} out of 5 correct) <<<\n>>> Status: PASSED <<<`);
  } else {
    console.log()
    console.log(`>>> Overall Grade: ${grade}% (${numOfCorrectAnswers} out of 5 correct) <<<\n>>> Status: FAILED <<<`);
  }
   return grade;
}
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hi, " + candidateName)
  askQuestion(questions)
  console.log("\n\nCandidate Name:" + candidateName)
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
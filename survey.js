//setup readline

const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//list of questions to ask user
const questions = [
  'Whats is your name? ',
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite? (eg: dinner, brunch, etc,) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? "
];

//array for storing question answers... for a future version combine questions and answers in an object
const listOfAnswers = [];

//recursive function that will ask each question and push the answers to the answer array.
const questionPrompt = function (arr, step, callback){
  rl.question(arr[step], (answer) => {
    listOfAnswers.push(answer);
    step = step + 1;
    if(step === arr.length - 1){
      rl.question(arr[step], (answer) => {
        listOfAnswers.push(answer);
        console.log (`Hi, I'm ${listOfAnswers[0]}. I like ${listOfAnswers[1]} while listening to ${listOfAnswers[2]}. I love eating ${listOfAnswers[4]} for ${listOfAnswers[3]}. My favourite sport is ${listOfAnswers[5]}. People know me because of my superpower: ${listOfAnswers[6]}.`);
        rl.close()
    })
  } else {
    callback(arr, step, callback);
  }
  })
}

questionPrompt(questions, 0, questionPrompt)





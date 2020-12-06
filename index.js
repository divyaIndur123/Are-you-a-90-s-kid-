/**
 * required module
 */
const readLineSync = require('readline-sync');
const chalk = require('chalk');

/**
 * Greeting user
 */
var username = readLineSync.question(chalk.hex('#ff006e').bold('Hey buddy! Whats your Name? '));
console.log(chalk.hex('#8338ec')("Heyya! " + chalk.bold.italic.underline.hex('#8338ec')(username.toUpperCase()) + " buckle up!"));
console.log("\n");

/**
 * storage
 */
var questionList = [
  {
    question: "What is the name of a boy-genius and inventor with a hidden laboratory in his room ? ",
    options: ["Dexter", "garry", "noddy"],
    correctAnswer: "Dexter"
  },
  {
    question: "What was the name of Richie Rich's dog? ",
    options: ["scobby", "Dollar", "Dwayn"],
    correctAnswer: "Dollar"
  },
    {
    question: "Name of the cutest powerpuff girl? ",
    options: ["blossom", "bubble", "buttercup"],
    correctAnswer: "bubble"
  },
    {
    question: "Name of the cat in 'Baby Looney Tunes'? ",
    options: ["sylvester", "tweety", "Dwayn"],
    correctAnswer: "sylvester"
  },
    {
    question: "Name the cowardly dog whose constant fear presents comical scenarios as he tries to protect his owners and was also able to operate computer? ",
    options: ["courage", "Droopy", "Snoopy"],
    correctAnswer: "courage"
  },
    {
    question: "A species that can generate powerful electricity have cheek sacs that are extra soft and super stretchy from pokemon? ",
    options: ["pichu", "Pikachu", "Richu"],
    correctAnswer: "Pikachu"
  },
  {
    question: "what was the favrourite food of Popeye? ",
    options: ["Samosa", "raddish", "Spinach"],
    correctAnswer: "Spinach"
  },
   {
    question: "what was the name of fred's wife in 'The flintstones'? ",
    options: ["wilma", "gilma", "gimma"],
    correctAnswer: "wilma"
  },
  {
    question: "Who was the major enemy of The Powerpuff Girls? ",
    options: ["mojo-jojo", "jojo-gogo", "mojo-gogo"],
    correctAnswer: "mojo-jojo"
  },

  {
    question: "has no shortage of confidence, and he's certain that all women want him. With his big hair and tight black clothes, he's known for his karate chops, accompanied by the sound of a bullwhip ? ",
    options: ["jonny-bravo", "jinne-john", "billy-nandy"],
    correctAnswer: "jonny-bravo"
  }
 
];

var questionListLevel_1 = [
  {
    question: "Is Dee Dee younger or older than Dexter in Dexters Laboratory ?",
    options: ["younger", "older", "same age"],
    correctAnswer: "older"
  },
  {
    question: "What are the names of Patrick's parents on Spongebob? ",
    options: ["Janet and marty", "susan and roy", "Herb and Margie"],
    correctAnswer: "Herb and Margie"
  },
    {
    question: "Which of these people IS a fairy on Winx Club? ",
    options: ["Daisy", "tecna", "Luz"],
    correctAnswer: "tecna"
  },
    {
    question: "Emmy and Max discovered a magical place called Dragon Land were related to each other as? ",
    options: ["siblings", "friends", "cousin"],
    correctAnswer: "siblings"
  },
    {
    question: "conjoined brothers of different species, with one half of the resultant animal being a______and the other a ____? ",
    options: ["cat and mouse", "dog and cat", "tiger and lion"],
    correctAnswer: "cat and mouse"
  }
    
 
];

var highScore = 4;
var score =0;
var highestScorer ="Anamika";

/**
 * Processing -To check the correct answer
 */
function questionAndAnswer(answer, correctAnswer) {

  if (answer == undefined) {
    questionList.length=0;

  } else if (answer == correctAnswer) {

    console.log(chalk.bold.green('you are right!!'));
    score = score + 1;
    console.log(chalk.hex('#3a86ff')('your current score is '+score));
    console.log("\n");
  }
  else {
    console.log(chalk.bold.hex('#d00000')('you are wrong!'));
    console.log(chalk.hex('#3a86ff')('your current score is '+score));
    console.log("\n");
  }

}

/**
 * Processing the storage value to display
 */
function displayQuestions(questionList){

for (var i = 0; i <= questionList.length - 1; i++) {
  var currentOption = questionList[i].options
  var currentQuestion = questionList[i].question;
  

  console.log(chalk.hex('#fb5607').bold("Q ")+chalk.hex('#fb5607').bold(currentQuestion));

  // To get user option
  var index = readLineSync.keyInSelect(currentOption, null);
  var userAnswer = currentOption[index];
  if(userAnswer==undefined){
    console.log(chalk.hex('#2ec4b6')("you selected CANCEL BYE BYE!"));
    console.log('\n');
  }
 
  questionAndAnswer(userAnswer, questionList[i].correctAnswer);
  }
}
displayQuestions(questionList);

/**
 * To evaluate the final result
 */

console.log(chalk.black.bold.bgHex('9c27b0')('your final score is '+score));
if(highScore<score){
  console.log(("You are the new high scorer "+ score));
  console.log(chalk.bold.green("Congratulation you just leveled up!!"));
  // To move to next level
  if (readLineSync.keyInYN('Do you want to continue to next level?')) {
    displayQuestions(questionListLevel_1);

} 
}

else{
  console.log(chalk.black.bold.bgHex('#ff1744')("You couldn't beat the highest score "+ highScore +" by "+highestScorer ));
  console.log('\n');
}

console.log(("your final score is " +score));
console.log("The END Bye Bye "+ chalk.black.bold.bgHex('#ffffff')("^_^"));





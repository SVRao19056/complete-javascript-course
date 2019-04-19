/*
var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth)
}

var john = new Person('John' , 1990 , 'teacher');
var jane = new Person('Jane', 1963, 'designer');

john.calculateAge();
jane.calculateAge();
*/
//Lecture Objects
/*

var personProto = {
    calculateAge: function(){
        console.log(2018,- this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1980;
john.job = 'teacher';

var jane = Object.create(personProto , {
    name: {value:'Jane'},
    yearOfBirth :{value:1968},
    job : {value: 'designer'}

})
*/

//Section 5 Chalenge 1
/** 
 * @description This is the first chalenge Simple version
 */
/*
(function() {
let getRandom = function(max){
 return Math.floor( Math.random() * max)
}
 function Question(question , answers , correct)
{
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
  for(let i=0 ; i < this.answers.length ; i++) {
      console.log(i+1 +':' + this.answers[i])
  }

}

Question.prototype.getAnswer = function(ans) {
  if (this.correct === ans)
  {
      console.log('Correct !')
  }else{
      console.log('Wrong')
  }
}

let q1 = new Question('Is Javascript the coolest',['Yes','No'],0);
let q2 = new Question('What is the name',['Jack','Jonas', 'Mary'], 1);
let q3 = new Question('What is coding like',['Bad', 'Worse','Cool','Tedious'],2);

let questions = [q1,q2,q3];
let rnd = getRandom(questions.length)-1;
questions[rnd].displayQuestion();
var answer = parseInt(prompt('Please select the right answer'));
questions[rnd].getAnswer(answer-1);

})()
*/

/**
 * //Section 5 Chalenge 2
 */

 /** 
 * @description This is the Second chalenge expert version
 */

(function() {
let getRandom = function(max){
   let rnd ;
    rnd = Math.floor( Math.random() * max)
    while (rnd <=0 && rnd > max)
    {
        console.log(`redo as ${rnd} is outside range` )
         rnd = Math.floor( Math.random() * max)
     
    }
    return rnd;
}
 function Question(question , answers , correct)
{
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
  for(let i=0 ; i < this.answers.length ; i++) {
      console.log(i+1 +':' + this.answers[i])
  }

}

Question.prototype.getAnswer = function(ans , callback) {
  if (this.correct === ans)
  {
      console.log('Correct !')
      callback(true);
  }else{
      console.log('Wrong')
      callback(false)
  }
}
Question.prototype.displayScore = function(score){
    console.log(`--------The Score is ${score} --------------`);
}

function maintainScore(){
    var score = 0;
    return function(correct){
        if(correct){
            score++;
            }
        return score;
    }
}

let keepScore = maintainScore();
let q1 = new Question('Is Javascript the coolest',['Yes','No'],0);
let q2 = new Question('What is the name',['Jack','Jonas', 'Mary'], 1);
let q3 = new Question('What is coding like',['Bad', 'Worse','Cool','Tedious'],2);
let questions = [q1,q2,q3];
function nextQuestion()
{

    let rnd = getRandom(questions.length);
    questions[rnd].displayQuestion();
    var answer = prompt('Please select the right answer');
    if (answer !=='exit')
    {
        questions[rnd].getAnswer(answer-1 , keepScore);
        questions[rnd].displayScore(keepScore());
        nextQuestion()
    }
}
   
nextQuestion();
})()
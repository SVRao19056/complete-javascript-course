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

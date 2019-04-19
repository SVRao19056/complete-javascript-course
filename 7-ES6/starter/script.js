/*
const boxes = document.querySelectorAll('.box');

const boxes6 = Array.from(boxes);

for (const cur of boxes6 ){
    if(cur.className.includes('blue'))
    {
        continue;
    }
     cur.textContent = 'Changed to blue';
}

var ages = [12,17,8,21,14,11];

console.log(ages.findIndex( cur => cur > 18));
console.log(ages.find(cur => cur> 18));
function addFourAges(a,b,c,d){
    return a+b+c+d;
}
const max3 = addFourAges(...ages)
console.log(max3)

const f1 = ['ss','dd']
const f2 =['22','33']

const f3 = [...f1, ...f2]
console.log(f3)

const h = document.querySelector('h1');
 const all = [h,...boxes];
 console.log(all);
 Array.from(all).forEach( cur => cur.style.color = 'purple');

 //Rest

 function IsFullAge5()
 {
     var arrg5 = Array.prototype.slice(arguments);
     arrg5.forEach( function(cur){
         console.log(2016 - cur);
     })
 }

 //ES6
 
  function IsFullAge6(...args){a
   args.forEach( y => console.log((2016- y) >18))
}

IsFullAge6(1998,2001,2000,1958)
*/

//Lecture : MAPS

const question = new Map();

question.set('question','What is new name ')
question.set(1,'ES5')
question.set(2,'ES6')
question.set(3,'ES2016')
question.set('correct',3)
question.set(true, 'Correct A :D' )
question.set(false, 'Wrong')
console.log(question);
console.log(question.get('question'));
console.log(question.size);

if (question.has(3))
{
    console.log('has 3');
}
console.log(question)
question.forEach((value,key,arr)=> console.log(value , key , arr));

for(let [key , value] of question.entries())
{
    if (typeof(key)==='number')
    {
    console.log(`Answer ${key}. ${value}`)
    }
}

let ans = parseInt(prompt('Answer'));
 console.log( question.get(ans === question.get('correct') ));




class Person6{
    constructor(name,yearOfBirth,job)
    {
        this.name= name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        let age = parseInt(new Date().getFullYear()) - parseInt(this.yearOfBirth);
        console.log(age);

    }
}

const john6 = new Person6('John',1990,'teacher');
console.log(john6);
john6.calculateAge();

class Athlete6 extends Person6 {
    constructor(name,yearOfBirth,job,olympic , medals){
        super(name,yearOfBirth,job);
        this.olympic = olympic;
        this.medals = medals;
    }
    wonMedals() {
        this.medals++;
        console.log(this.medals);
        
    }
}

const alt = new Athlete6('Mark',1958,'swimmer',3,10);
alt.wonMedals();
alt.calculateAge();


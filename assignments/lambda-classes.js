// CODE here for your Lambda Classes
class Person {
    constructor(personProperties) {
        this.name = personProperties.name;
        this.age = personProperties.age;
        this.location = personProperties.location;
        this.gender = personProperties.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location} `;
    }
};

class Instructor extends Person {
    constructor(instructorProperties) {
        super(instructorProperties)
        this.specialty = instructorProperties.specialty;
        this.favLanguage = instructorProperties.favLanguage;
        this.catchPhrase = instructorProperties.catchPhrase;
        this.subject = instructorProperties.subject;
    }
    demo() {
        return `Today we are learning about ${this.subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    giveGrade() {

    }
};

class Student extends Person {
    constructor(studentProperties) {
        super(studentProperties)
        this.previousBackground = studentProperties.previousBackground;
        this.className = studentProperties.className;
        this.favSubjects = studentProperties.favSubjects;
        this.grade = studentProperties.grade;
    }
    listsSubjects() {
        return `${favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
};


class ProjectManagers extends Instructor {
    constructor(PMproperties) {
        super(PMproperties)
        this.gradClassName = PMproperties.gradClassName;
        this.favInstructor = PMproperties.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode() {
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }
}

//Eggs (People)
const eggOne = new Person({
    name: 'Egg one',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const eggTwo = new Person({
    name: 'Egg two',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const eggThree = new Person({
    name: 'Egg three',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

//Water Pokemon (Instructors)
const squirtle = new Instructor({
    name: 'Squirtle',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'Watersports'

});
const wortortle = new Instructor({
    name: 'Wortortle',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'Watersports'

});
const blastoise = new Instructor({
    name: 'Blastoise',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'Watersports'

});

// Fire pokemon (Students)
const charmander = new Student({
    name: 'Charmander',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    favSubjects: ['Flamebolt', 'Flamethrower', 'Magma']
});
const charmeleon = new Student({
    name: 'Charmeleon',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    sprintChallenge: ' blahhhhh'
});
const charizard = new Student({
    name: 'Charizard',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    PRAssignment: 'blah'
});

// Grass pokemon (Project managers)
const bulbasaur = new ProjectManagers({
    name: 'Bulbasaur',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    channel: 'web19',
});


console.log(charmander.listsSubjects);
console.log(charmander.speak());
console.log(squirtle.demo());
console.log(charizard.PRAssignment("Flame Works"));
console.log(bulbasaur.standup("#vineWhip"));
console.log(squirtle.grade(bulbasaur, "Sunbeam"));
console.log(charmeleon.sprintChallenge("Flame Barage"));
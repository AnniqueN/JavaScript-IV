// CODE here for your Lambda Classes

//***PERSON*/
class Person {
    constructor(material) {
        (this.name = material.name),
            (this.age = material.age),
            (this.location = material.location);
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

//***INSTRUCTOR */
class Instructor extends Person {
    constructor(material) {
      super(material);
      (this.specialty = material.specialty),
        (this.favLanguage = material.favLanguage),
        (this.catchPhrase = material.catchPhrase);
    }
    demo(subj) {
      return `Today we are learning about ${subj}.`;
    }
    grade(stud, subj) {
      return `${stud.name} receives a perfect score on ${subj}.`;
    }
    gradeAssignment(stud) {
      let valassign = Math.random();
      if (valassign > 0.7) {
        let poschange = Math.floor(Math.random() * 7);
        stud.grade += poschange;
        return `${stud.name}'s has gone up by ${poschange} points! It is now ${stud.grade}.`;
      } else {
        let negchange = Math.floor(Math.random() * -4);
        stud.grade += negchange;
        return `${stud.name}'s has gone down by ${negchange} points! It is now ${stud.grade}.`;
      }
    }
  }
  
  //**STUDENT */
  class Student extends Person {
    constructor(material) {
      super(material);
      (this.previousBackground = material.previousBackground),
        (this.className = material.className),
        (this.grade = material.grade),
        (this.favSubjects = material.favSubjects);
    }
    listsSubjects() {
      return this.favSubjects.forEach(function(item) {
        console.log(item);
      });
    }
    PRAssignment(subj) {
      return `${this.name} has submitted a PR for ${subj}`;
    }
    sprintChallenge(subj) {
      return `${this.name} has begun sprint challenge on ${subj}`;
    }
    willGraduate() {
      if (this.grade > 70) {
        return `${this.name} has graduated from Lambda School! Hurray!`;
      } else {
        return `${
          this.name
        } does not have a high enough grade. Graduation requires at least a 70% grade.`;
      }
    }
  }

//***PROJECT MANAGER */
class ProjectManager extends Instructor {
    constructor(material) {
      super(material);
      (this.gradClassName = material.gradClassName),
        (this.favInstructor = material.favInstructor);
    }
    standUp(chan) {
      return `${this.name} announces to ${chan}, "@channel standy times!"`;
    }
  }

  const gigiMiller = new Person({
    name: "Gigi",
    age: 28,
    location: "Texas"
  });
  const kateJones = new Person({
    name: "Kate",
    age: 31,
    location: "Canada"
  });
  console.log(gigiMiller.speak());
  console.log(kateJones.speak());
  
  const blaire = new Student({
    name: "Blaire",
    age: "29",
    location: "New York",
    previousBackground: "Assistant",
    className: "WebPT 12",
    favSubjects: ["JavaScript", "HTML"],
    grade: 77,
  });
  const nikki = new Student({
    name: "Nikki",
    age: "31",
    location: "Texas",
    previousBackground: "Banking",
    className: "Web 21",
    favSubjects: ["CSS", "Javascript"],
    grade: 100,
  });
  console.log(blaire.PRAssignment("HTML"));
  nikki.listsSubjects();
  console.log(blaire.sprintChallenge("JavaScript"));
  console.log(nikki.willGraduate());
  
  const superWoman = new Instructor({
    name: "Woman",
    age: 41,
    location: "Misouri",
    specialty: "JavaScript",
    favLanguage: "JavaScript",
    catchPhrase: "Word!"
  });
  const dino = new Instructor({
    name: "Dinomar",
    age: 43,
    location: "Jamaica",
    specialty: "CSS",
    favLanguage: "Functions",
    catchPhrase: "Ain't Worried About Nothing!"
  });
  const theGreatest = new Instructor({
    name: "James",
    age: 34,
    location: "The Bay",
    specialty: "HTML",
    favLanguage: "Elements",
    catchPhrase: "Rise And Shine!"
  });
  console.log(superWoman.demo("JavaScript"));
  console.log(superWoman.grade(blaire, "HTML"));
  console.log(dino.gradeAssignment(theGreatest));
  
  const ninoMoore = new ProjectManager({
    name: "Nino",
    age: 27,
    location: "Dallas",
    specialty: "JavaScript",
    favLanguage: "JavaScript",
    catchPhrase: "It's a Wrap!",
    gradClassName: "Web 2",
    favInstructor: "Hakeem"
  });
  const jamalBall = new ProjectManager({
    name: "Jamal",
    age: 29,
    location: "Queens",
    specialty: "C",
    favLanguage: "Python",
    catchPhrase: "Easy Breezy!",
    gradClassName: "Web 17",
    favInstructor: "Simon"
  });
  console.log(ninoMoore.gradeAssignment(blaire));
  console.log(jamalBall.standUp("WebPT 17"));

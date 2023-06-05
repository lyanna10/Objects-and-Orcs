const adventurer = {
	name: "Timothy",
	hitpoints: 10,
    belongings: ["sword", "potion", "Tums"],
    companion: {
		name: "Velma",
        type: "Bat",
        companion: {
			name: "Tim",
            type: "Parasite",
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		} 
	}
}

//Access all values in the adventurer.belongings array
console.log(adventurer.belongings);

//Access a specific item in the belongings array
console.log(adventurer.belongings[0]);

//Iterate Over an Array within an Object
for (let i=0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}

//Our adventurer now has a companion! Our companion, a bat, is an object with its own properties.
//Add the companion object to the adventurer object
//Access the companion object
console.log(adventurer.companion);

//Access the companion's name
console.log(adventurer.companion.name);

//Access the companion's type
console.log(adventurer.companion.type);

//Let's add Tim to our data:
//What would you write to console.log Tim's type?
console.log(adventurer.companion.companion.type);

//What would your write to console.log "health insurance"?
console.log({ ...adventurer.companion.companion, belongings: "health insurance" });


//constructor is a special function. Try misspelling constructor (ie constr) and see if you still get the same results
/*class Character {
  constr () {
    this.legs = 2;
    this.arms = 2;
    this.eyes = 'hazel';
    this.hair = 'gray';
  }
  greet (otherCharacter) {
    console.log('Hi ' + otherCharacter + '!');
  }
  smite () {
    console.log('I smite thee you vile person!');
  }
}
const me = new Character();
console.log(me);
*/
//Now we can see how classes work in this context, so how could we use our Character class to now create more classes, like Orcs, Dragons, Wizards, Sages, and Blood Elves?
class Character {
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || false;
    }
     greet (otherCharacter) {
    console.log('Hi ' + otherCharacter + '!');
  }
  classyGreeting (otherClassyCharacter) {
    console.log('Greetings ' + otherClassyCharacter.name + '!');
  }
  setHair (hairColor) {
    this.hair = hairColor;
  }
  smite () {
    console.log('I smite thee you vile person!');
  }

}
const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
const my = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');

my.classyGreeting(you);
you.classyGreeting(my);

//extending character 
/*class Orc extends Character {
    constructor(name, health, power, weapon) {
        super(name, health, power);
        this.weapon = weapon;
    }
}

class Dragon extends Character {
  constructor(name, health, power, element) {
    super(name, health, power);
    this.element = element;
  }
}

class Wizard extends Character {
  constructor(name, health, power, spell) {
    super(name, health, power);
    this.spell = spell;
  }
}

class Sage extends Character {
  constructor(name, health, power, wisdom) {
    super(name, health, power);
    this.wisdom = wisdom;
  }
}

class BloodElf extends Character {
  constructor(name, health, power, bloodlust) {
    super(name, health, power);
    this.bloodlust = bloodlust;
  }
}
*/

//super is another special keyword/function. Try mispelling it, and you'll see it won't have the same functionality
class Hobbit extends Character {
  constructor (name, age, eyes, hair) {
    super(name, age, eyes, hair); //ReferenceError: supers is not defined
    this.skills = ["thievery", "speed", "willpower"];
  }
  steal () {
    console.log("Let's get away!");
  }
  greet (otherCharacter) {
    console.log(`Hello ${otherCharacter}.`);
  }
  smite () {
    super.smite();
    this.steal();
  }
}

const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
console.log(frodo);

//Make a class of Elves, Dwarves, Men, or something else that resonates with your fantasy world. Be creative and share your class with the class
class Elvis extends Character {
    constructor (name, age, eyes, hair) {
    super(name, age, eyes, hair);
    this.skills = ["sing", "dance"];
    }

    loves() {
        console.log("let's sing and dance");
    }

    greeter(greetCharacter) {
        console.log(`Hello, ${greetCharacter}.`);
    }

    setResults() {
        this.loves();
    }
}
const loveFirst = new Elvis('Brown', 39, 'brown', 'black');
console.log(loveFirst);
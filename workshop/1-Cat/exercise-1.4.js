// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.

class Cat {
    constructor (name, breed){
        this.name = name;
        this.breed = breed;
        this.tiredness=0;
        this.hunger=0;
        this.loneliness = 0;
        this.happiness=0;
    }

    sleep = (hours) => {
        this.tiredness -= (5*hours);
        this.happiness += 25;
    }
    eat = (grams) => {
        this.hunger -= (grams/5);
        this.happiness += 10;
    }
    play = (minutes) => {
        this.loneliness -= (3*minutes);
        this.happiness += 15;
    }
    wait = (minutes) => {
        this.tiredness += (minutes*2);
        this.hunger += (minutes*1.5);
        this.loneliness += (minutes*2.5);
        this.happiness -= (minutes*5);
    }
}

// B) Make Boots wait 20 minutes and call then console.log(boots);

let boots = new Cat('boots','siamese');
boots.wait(20);
boots.sleep(8);
boots.eat(100);
boots.play(25);
console.log(boots);

Cat {
    sleep: [Function: sleep],
    eat: [Function: eat],
    play: [Function: play],
    wait: [Function: wait],
    name: 'boots',
    breed: 'siamese',
    tiredness: 40,
    hunger: 40,
    loneliness: 25,
    happiness: -150
}
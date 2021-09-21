class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return `Hi I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let decription = super.getDescription();

        if(this.hasMajor()) {
            decription += ` Their major is ${this.major}.`;
        }
        return decription;
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
  
    getGretting() {
        let gretting = super.getGretting();

        if(this.homeLocation) {
             gretting += ` I am visiting from ${this.homeLocation}.`;
        }
        return gretting;
    }
};



const me = new Traveler('Aleksandra Bulatovic', 28, 'Valjevo');
const other = new Traveler();

console.log(me.getGretting());
console.log(other.getGretting());
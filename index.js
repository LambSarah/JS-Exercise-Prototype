/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
    this.isFlying = true;
};
Airplane.prototype.land = function() {
    this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/


/**
 * Constructor for Person prototype object
 * @param {*} name the person's name
 * @param {*} age  the person's age
 * Creates a person, with name, age, and stomach properties.
 * stomach initializes as an empty array.
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}
/**
 * eEat' function to Person prototype
 * @param {*} someFood
 */
Person.prototype.eat = function(someFood) {
    if (this.stomach.length < 10) {
        this.stomach.push(someFood);
    }
};

Person.prototype.poop = function() {
    this.stomach = [];
};

Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`;
};


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

/*
 * @param {*} model
 * @param {*} milesPerGallon
 */
function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
    this.tank = this.tank + gallons;
};

Car.prototype.drive = function(distance) {
    const gasUsed = distance / this.milesPerGallon;
    if (gasUsed <= this.tank) {
        this.odometer = this.odometer + distance;
        this.tank = this.tank - gasUsed;
    } else {
        let distanceTravelled = this.milesPerGallon * this.tank;
        this.odometer = this.odometer + distanceTravelled;
        this.tank = 0;
        return `I ran out of gas at ${distanceTravelled} miles!`;
    }
};
/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `
            name ` and `
            age `, Baby takes a third argument to initialize `
            favoriteToy `.
    - Besides the methods on Person.prototype, babies have the ability to `.play()
            `:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
    Person.call(this, favoriteToy);
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
    this.isChild = favoriteToy.isChild;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`;
};


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window/global binding refers to either the window or console object, depending on what the script is being run on. In a browser console, it would be window; otherwise global.
  2. Implicit binding is the most commom principle used and it is when a function is called using a dot before it(like person.run()).
  3. New binding is used whenever you use a constructor function, referring to the specific instance of the object being created.
  4. Explicit binding is used whenever the call or apply function is used by a child prototype.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
    return 'bar';
}

export default {
    foo,
    Person,
    Car,
    Baby
};
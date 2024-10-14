// 1. Refactored: Variable renamed (pi -> constantPi)
function calculateArea(radius) {
    const constantPi = 3.14; // Renamed 'pi' to 'constantPi'
    return constantPi * radius * radius;
}

console.log("Area:", calculateArea(5));

// 2. Refactored: Class renamed (Circle -> Sphere)
class Sphere { // Renamed 'Circle' to 'Sphere'
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const myShape = new Sphere(5); // Updated class name
console.log("Area of Sphere:", myShape.calculateArea());

// 3. Refactored: Parameter added (greeting)
function greet(name, greeting = "Hello") { // Added a new 'greeting' parameter
    return `${greeting}, ${name}!`;
}

console.log(greet("John")); // Default greeting
console.log(greet("John", "Hi")); // Custom greeting

// 4. Refactored: Parameter renamed (n -> name)
function greetUser(name) { // Renamed 'n' to 'name'
    console.log(`Hello, ${name}!`);
}

greetUser("Alice");

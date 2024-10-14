// 1. Original: No variable rename
function calculateArea(radius) {
    const pi = 3.14;
    return pi * radius * radius;
}

console.log("Area:", calculateArea(5));

// 2. Original: No class rename
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const myShape = new Circle(5);
console.log("Area of Circle:", myShape.calculateArea());

// 3. Original: No parameter added
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("John"));

// 4. Original: No parameter rename
function greetUser(n) {
    console.log(`Hello, ${n}!`);
}

greetUser("Alice");

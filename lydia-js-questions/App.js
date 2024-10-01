// Lydia JS Questions

// Question 1

function sayHi() {
    console.log(name);
    // console.log(age);
    var name = 'Lydia';
    // let age = 21;
}

sayHi();

// A: Lydia and undefined
// B: Lydia and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

// Question 2

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

// A: 0 1 2 and 0 1 2
// B: 0 1 2 and 3 3 3
// C: 3 3 3 and 0 1 2

// Question 3

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

// A: 20 and 62.83185307179586
// B: 20 and NaN
// C: 20 and 63
// D: NaN and 63
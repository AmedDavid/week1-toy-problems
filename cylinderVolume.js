// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    volume() {
        return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
    }
}

// My Tests
const cylinder = new Cylinder(3, 5);
console.log(cylinder.volume()); // 141.3717

const cylinder2 = new Cylinder(4, 6);
console.log(cylinder2.volume()); // 301.5929









// The volume of a cylinder can be calculated using the formula V = πr²h, where r is the radius of the base and h is the height of the cylinder.
//
// Write a class called Cylinder that has two properties: radius and height. Add a method to the class called volume() that calculates the volume of the cylinder. The volume is given by the formula πr²h.
//
// Examples
// const cylinder = new Cylinder(3, 5);
// console.log(cylinder.volume()); // 141.3717
// const cylinder2 = new Cylinder(4, 6);
// console.log(cylinder2.volume()); // 301.5929
// Notes
// Return the answer rounded to four decimal places.
// If the radius or height is 0, return 0.
// The formula for the volume of a cylinder is V = πr²h

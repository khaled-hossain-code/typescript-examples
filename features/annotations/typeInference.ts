/*
       | - Primitive Types - number, boolean, void, undefined, string, symbol, null
       |
Types - 
        |
        |- Object Types - functions, arrays, classes, objects
*/
// type inference- when we initialize a variable with value we don't need to assign type explicitly
let apples1 = 5;
let speed1 = "fast";
let hasName1 = true;
let nothingMuch1 = null;
let nothing1 = undefined;

// build in objects
const now1 = new Date();

// Array
const colors1 = ["red", "green", "blue"];
const numbers1 = [1, 2, 3];

// Classes
class Car1 {}
const ca1r = new Car1();

// Object Literal
const point1 = {
  x: 10,
  y: 20,
};

// Function
const sum1 = (a: number, b: number): number => {
  return a + b;
};

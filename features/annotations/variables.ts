/*
       | - Primitive Types - number, boolean, void, undefined, string, symbol, null
       |
Types - 
        |
        |- Object Types - functions, arrays, classes, objects
*/
// type annotation
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// build in objects
const now: Date = new Date();

// Array
const colors: string[] = ["red", "green", "blue"];
const numbers: number[] = [1, 2, 3];

// Classes
class Car {}
const car: Car = new Car();

// Object Literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const sum: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Shelf from "./Shelf.js";

const myShelf= new Shelf(
    "book shelf",
    5,
    50,
    1,
    "Shatter Me",
    "Oregairu",
    "Grisha Jeager's Notes"
);

console.log("This is my shelf:", myShelf);
console.log("Old shelf height off of the ground=",myShelf.height);
myShelf.changeHeight(1.5);
console.log("New shelf height off of the ground=",myShelf.height);




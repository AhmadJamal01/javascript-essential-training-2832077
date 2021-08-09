/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const shelf = {
  name: "book shelf",
  itemNum: 30,
  lenght: 50,
  thickness: 5,
  items: {
    book1: "Zorba the Greek",
    book2: "Oregairu",
    book3: "Shatter Me",
  },
  clean: true,
};

console.log("The shelf is a:", shelf.name);
var firstBook = "book1";
console.log("The first book on the shelf is:", shelf.items[firstBook]);

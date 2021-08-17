/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const items = [
  "laptop",
  "towel",
  "charger",
  5,
  "perfume",
  "pills",
  "alcohol",
  "visa",
];
console.log(items);
const lastItem = items.pop();
console.log(lastItem);
console.log(items);
items.unshift(lastItem);
console.log(items);
items.sort();
console.log(items);
const removed = items.splice(items.indexOf("alcohol"), 1);
console.log(removed);
console.log(items);

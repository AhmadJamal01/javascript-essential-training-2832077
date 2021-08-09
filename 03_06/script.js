/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};


console.log("The backpack object:", backpack);
console.log("The backpack color is:", backpack.color);
console.log("The backpack name is:", backpack["name"]);
var leftLength = "left";
console.log("The backpack left strap length is:", backpack.strapLength[leftLength]);


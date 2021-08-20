/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
var iterator = 0;
var colors = [
  "cadetblue",
  "chartreuse",
  "coral",
  "firebrick",
  "greenyellow",
  "lightblue",
  "mediumslateblue",
  "orangered",
];

const gridOutline = document.querySelector(".grid");
gridOutline.addEventListener("mouseenter", () => {
  gridOutline.classList.toggle("gridHighlight");
});

gridOutline.addEventListener("mouseleave", () => {
  gridOutline.classList.toggle("gridHighlight");
});

let gridCells = document.querySelectorAll(".cell");

//var colors = ["#ff0000", "#00ff00", "#0000ff"];
//document.getElementById('title').style.color = random_color;

gridCells.forEach((cell) => {
  cell.addEventListener(
    "mouseenter",
    () => {
      //let random_color = colors[Math.floor(Math.random() * colors.length)];
      //cell.style.backgroundColor = random_color;
      //console.log("entered a cell");
      cell.classList.toggle("cellHighlight");
      iterator = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
      cell.style.backgroundColor = colors[iterator];
    },
    false
  );

  cell.addEventListener(
    "mouseleave",
    () => {
      cell.classList.toggle("cellHighlight");
      cell.style.backgroundColor = "lightgrey";
      //console.log("left a cell");
    },
    false
  );

  cell.addEventListener("click", () => {
    //let random_color = colors[Math.floor(Math.random() * colors.length)];
    //cell.style.backgroundColor = random_color;
    iterator = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
    cell.style.backgroundColor = colors[iterator];
  });
});

let outer = document.body
outer.addEventListener("keydown", (e) => {
  if (e.code === "KeyL") {
    outer.style.backgroundColor = "white";
  } else if (e.code === "KeyD") {
    outer.style.backgroundColor = "darkgrey";
  }
});

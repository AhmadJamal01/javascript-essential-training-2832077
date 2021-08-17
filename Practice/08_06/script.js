/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

/*
const newArt = createArticle();

function addArticle(article) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = article;
  const main = document.querySelector("main");
  main.append(newArticle);
  console.log("Article added!");
}

function createArticle() {
  const article = `
    <h1>MAKING AN ARTICLE</h1>
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
    </ul>
    `;
  return article;
}

addArticle(newArt);
*/
///////////////////////////////////////////////////////////////////////////////////////
/*
const addArt = function (article) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = article;
  const main = document.querySelector("main");
  main.append(newArticle);
  console.log("Article added!");
};

const newArt2 = function () {
    const article = `
    <h1>MAKING AN ARTICLE</h1>
    <ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
    <li>item4</li>
    </ul>
    `;
    return article;
};

const art2 = newArt2();
addArt(art2);
*/

/////////////////////////////////////////////////////////////////

const addArt3 = (article) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = article;
  const main = document.querySelector("main");
  main.append(newArticle);
  console.log("Article added!");
};

const newArt3 = () => {
  const article = `
    <h1>MAKING AN ARTICLE</h1>
    <ul>
    <li>item1</li>
    <li>item2</li>
      <li>item3</li>
      <li>item4</li>
      </ul>
      `;
  return article;
};

const art3 = newArt3();
addArt3(art3);

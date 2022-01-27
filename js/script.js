// Question 1

/*Create an object called cat.

Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".
*/
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

// Question 2
/* Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.

Change its innerHTML value to "Updated heading". */

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3
/* Use the style property on the heading variable from the question above to change its font size to "2em". */

heading.style.fontSize = "2em";

//Question 4
/* Add a class to the heading variable called subheading. */

heading.className = "subheading";

//Question 5
/* Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.

Loop through the p elements and change the colour of each to "red". */

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((para) => (para.style.color = "red"));

/*Alternative code:
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}
*/

// Question 6
/* Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow. */

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7
/* Create a function that has one parameter called list.

Inside the function, loop through the list parameter and console log the name property in each object.

Call the function and pass in the cats variable in the script.js file in the repo. */

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function catNames(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

catNames(cats);

// Question 8
/* Create a function called createCats. The function will have one parameter called cats.

Inside the function loop through the value passed in as cats and create HTML for each object in the array.

Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.

If the age property is missing, it should display “Age unknown” instead.

Return the HTML from the function.

Call the function and pass in the cats array as the argument.

Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container. */

/**
 * loops the length of the given argument. Targeting the name and age property of it. creating html and returning it.
 * @param {which accepts one argument} cats
 * @returns the value of the catHtml variable. (which is the created html).
 */
function createCats(cats) {
  let catHtml = "";

  for (let i = 0; i < cats.length; i++) {
    //checks if the age property of the object in the cats array exists.
    if (!cats[i].age) {
      //if it don't exist, it makes a age property with the string value of "Age unknown".
      cats[i].age = "Age unkown";
    }
    catHtml += `<div>
                  <h5>Name: ${cats[i].name}</h5>
                  <p>Age: ${cats[i].age}</p>
                </div>`;
  }
  return catHtml;
}

document.querySelector(".cat-container").innerHTML = createCats(cats);

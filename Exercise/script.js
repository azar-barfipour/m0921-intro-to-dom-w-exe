/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const words = document.querySelector("p");
words.innerHTML = words.innerHTML
  .split(" ")
  .map((word) =>
    word.length > 8
      ? `<span style='background-color : yellow'>${word}</span>`
      : word
  )
  .join(" ");
// console.log(words);

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const body = document.querySelector("body");
body.innerHTML += `<a href='http://officeipsum.com'>Link</a>`;
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
// words.innerHTML = words.innerHTML.split(".");
words.innerHTML = words.innerHTML
  .split(".")
  .map((word) => word + ".<br/>")
  .join(" ");
console.log(words.innerHTML);
/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const count = words.innerHTML.split(" ").length;
// console.log(count);
const heading = document.querySelector("h1");
heading.innerHTML += `<p style='font-size: 14px' >Number of words : ${count}</p>`;
/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
Array.from(document.querySelectorAll("p")).forEach((each) => {
  each.innerHTML = each.innerHTML.replaceAll("?", "🤔");
});
Array.from(document.querySelectorAll("p")).forEach((each) => {
  each.innerHTML = each.innerHTML.replaceAll("!", "😲");
});

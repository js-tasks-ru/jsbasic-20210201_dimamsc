/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

 function ucFirst(str) {
  let firstLetter = str.charAt(0).toUpperCase();
  let restLetters = str.slice(1);
  return firstLetter + restLetters;
}

let newString = ucFirst("поколение");
console.log(newString);

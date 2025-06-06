/*
CIT 281 Lab 1
Name: William Kern
*/
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function printLetters() {
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let numberOfLetters = getRandomInteger(5, 25);
  let textString = "";
  for (let i = 0; i < numberOfLetters; i++) {
    textString = textString + letters[Math.floor(Math.random() * 26)];
  }

  console.log(numberOfLetters + " lowercase letters: " + textString);
}
printLetters();
/*I want this program to print out a string saying "XX lowercase letters: yyyyyyy" */
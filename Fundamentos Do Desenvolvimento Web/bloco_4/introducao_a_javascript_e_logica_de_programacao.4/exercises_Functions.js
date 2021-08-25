// Exercise 1 - Create a function that receives an string and return true if it's a palindrome

// create a function with the name isPalindrome
// define 'string' how it's param
// Open brackets
// declare a variable that will receives the reverse of the 'string' param
// if they are equals return true
// else return false

function isPalindrome(string) {
  let reverseString = string.split('').reverse().join('');
  if (reverseString === string) return true;
  else return false;
};

// Or

function verifiesPalindrome(string) {
  for(index in string){
    if(string[index] !== string[(string.length - 1) - index]){
      return false;
    }
  }
  return true;
};

// Exercise 2 - Declare a func that receives an array of int numbers and return the index of the biggest value

function arrayBiggestValueIndex(arrayOfNums) {
  let biggestValueIndex = 0;
  for (let index in arrayOfNums) {
    if (arrayOfNums[index] > arrayOfNums[biggestValueIndex]) {
      biggestValueIndex = index;
    }
  }
  return biggestValueIndex;
};

// Exercise 3 - Declare a func that receives an array of int numbers and return the index of the lower value

function arrayLowerValueIndex(arrayOfNums) {
  let lowerValueIndex = 0;
  for (let index in arrayOfNums) {
    if (arrayOfNums[index] < arrayOfNums[lowerValueIndex]) {
      lowerValueIndex = index;
    }
  }
  return lowerValueIndex;
};



// Exercise 4 - Declare a func that receives an array of names and return the biggest name

function biggestName(arrayOfNames) {
let biggestName = arrayOfNames[0];
  for (let name in arrayOfNames) {
    if (arrayOfNames[name].length > biggestName.length) {
      biggestName = arrayOfNames[name];
    }
  }
  return biggestName;
};

// Exercise 5 -

// Exercise 6 -Declare a function that receiveis an int N and returns the sum of 1 till N

function sum(num) {
  let result = 0;
  for (let index = 0; index <= num; index += 1) {
    result += index;
  }
  return result
};

// Exercise 7 - Declare a function that receiveis an string 'word' and and other 'ending'. Verifies if the string ending matches with the end of 'word'.

function isEnding(word, ending) {
  if (ending.length > word.length) return false;

  for (let index = 1; index <= ending.length; index += 1) {
    if (word[word.length - index] !== ending[ending.length - index]) {
      return false;
    }
  }
  return true;
}

console.log(isEnding('betrybe', 'be'));

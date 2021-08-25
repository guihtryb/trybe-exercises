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
}

console.log(isPalindrome('aaab'));
// Or

function verifiesPalindrome(string) {
  for(index in string){
    if(string[index] != string[(string.length - 1) - index]){
      return false;
    }
  }
  return true;
}

console.log(verifiesPalindrome('aaab'));


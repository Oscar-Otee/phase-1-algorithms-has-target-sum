function hasTargetSum(array, target) {
// Write your algorithm here
const objectForNumbersThatMakeTarget = {};

for (const element of array) {
  const result = target - element;
  if (result in objectForNumbersThatMakeTarget) return true;
    objectForNumbersThatMakeTarget[element] = true;
}

return false;
}
  

  


/* 
  Write the Big O time complexity of your function here
  since I have one loop that will be executed n times, the time complexity is n which is linear.
*/

/* 
  Add your pseudocode here

  create an object variable that will hold numbers in array as keys and true as value.
  loop though an array.
  create variable result which is the result of target - number
  return tru if the result is equal to any number in the array.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;




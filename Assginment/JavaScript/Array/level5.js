// Q1. easy level

const arr = [2,5,6,7]
//calculate the sum of the array using either "for of" Or "for in" Loop.
let sum = 0;
//using "for of" loop use in arr
for (let i of arr)
{
  sum = sum + i;
    
}
console.log(sum);



//Q2 high level
const users =['hari', 'shyam', 'hari']
//remove from array if duplicate

function removeDuplicate(users){
  return users.filter((item, index) => users.indexOf(item) ===index); //using Filter Method

}
console.log(removeDuplicate(users));
// ----------------------------------------------------------------------------

/* Method 2 using Loop and If condition to remove dup..  strings*/

const names =['hari', 'shyam', 'hari']
function removeDuplicates(names) {
  let newName = [];
  for (i = 0; i < names.length; i++) {
      if (unique.indexOf(names[i]) === -1) {
          unique.push(names[i]);
      }
  }
  return newName;
}
console.log(removeDuplicates(names));

//we can also use Set method , As set automaticall remove duplicate string from array
/* pseudocode:
let uniqueArr = Array.from(new Set(users));
*/



// Q3.

const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array


function sumOddNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumOddNumbers(arr[i]); // Recursive call for nested arrays
      
      
    } else if (typeof arr[i] === 'number' && arr[i] % 2 !== 0) {
      sum += arr[i]; // Add odd numbers to the sum
    }
  }

  return sum;
}

console.log(sumOddNumbers(newArr)); 








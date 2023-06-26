// Q1. easy level
const arr = [2,5,6,7]
//calculate the sum of the array using either "for of" Or "for in" Loop.
let sum = 0;
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



// Q3.
const newArr = [[4,5], [5,7], [7,2]]
//calculate the sum of all the odd numbers inside this nested array

const sumOfOddNumber = newArr
  .flat()
  .reduce((sum) => (num%2 !== 0 ? sum+sum :sum),0);
  console.log(sumOfOddNumber);



// Q4
const myDetails = [
  {id:3, name: 'hari'},
  {id:5, name: 'shyam'},
  {id:6, name: 'gopal'},
]

// return only array of ids: expected output  [3,5,6]

myDetails.map((item)=>{
return item.id
})



// Q5
const userDetails= [
  {score: 0, name:'hari', marks: [10,3,23]},
  {score: 0, name:'shyam', marks: [50,23,23]},
  {score: 0, name:'shyam',marks: [20,13,43]},
]
//loop over the arr of objects and calculate total score, expected output is:

userDetails.map((item)=>{
  let sum = 0;
  item.marks.map((value)=>{
  sum = sum + value;
})
item.score = sum;
return userDetails
})







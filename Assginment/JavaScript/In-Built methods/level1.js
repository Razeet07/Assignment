// write a code that generates random number from 1 to 5
const newArr = [1,2,3,4,5]


function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const result = randomItem(newArr);
console.log(result);

  
//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true

const string = 'hari'
const allUsers = ['hari','shyam','thakur']
var found = false;
//using array "includes method" to search any string from array.

const findHari = allUsers.includes(element => element === string);

if (!findHari ){
  console.log(false, 'string not found')
}else{
  console.log(findHari)
}



//Q2 find number of duplicates
//expected output is : 2
//true
const user= 'hari'
const userArr = ['hari','shyam','hari','thakur']



const duplicates = userArr.filter(item => item === user).length;
console.log(duplicates);
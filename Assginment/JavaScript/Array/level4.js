
//Q1 find if hari is in allUsers array or not/
//expected output is : 
//true


// method : 01
var strings = ['hari','shyam','hari','thakur'];
var searchString = "hari";
var found = false;
//using loop method to find specific string --> array
for (var i = 0; i < strings.length; i++) {
  if (strings[i] === searchString) {
    found = true;
    break;
  }
}

if (found) {
  console.log("hari' found in the array.", true);
} else {
  console.log("'hari' not found in the array.",false);
}


//method-02

const string = 'hari'
const allUsers = ['hari','shyam','thakur']
var found = false;
//using array "find method" to seach any string from array.
const findHari = allUsers.find(element => element === "hari");

if (findHari !== string){
  found = false;
  console.log(false, 'string not found')
}else{
  console.log(findHari,true)
}

// -----------------------------------------------------------------------------------------------------------------------------------

//Q2 find number of duplicates
//expected output is : 2
//true
const user= 'hari'
const userArr = ['hari','shyam','hari','thakur']



const duplicates = userArr.filter(item => item === user).length;
console.log(duplicates);
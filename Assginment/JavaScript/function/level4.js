//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30
}

let totalPrice = 0
function farePrice(){
  // using replace method to remove "km" from 20km 
rideDetails.distance = rideDetails.distance.replace("km", '');
  let newDist = rideDetails.distance
  console.log(newDist);
  
 // calculating totalprice 
  totalPrice = newDist * rideDetails.unitKmPrice;
  console.log(totalPrice)
  
}
farePrice()




//Q2 write a js function that checks if the object has status success or not
//should return true or false

const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
const checkIfSucces=()=>{
//write your code here

function lookUpProfile(status ) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
}
checkIfSucces(status1)  //should return false

checkIfSucces(status2)  //should return true 


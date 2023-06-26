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
const checkIfSucces=(obj)=>{
//write your code here
return obj.status === "success";
}


checkIfSucces(status1)  //should return false

checkIfSucces(status2) //should return true


const obj = {
    computer: 42,
    maths: 42,
    science: 50
}

//calculate the percentage he scored in the exams out of total 150 score

let sum = 0;
const obtScore  = Object.values(obj) 
//extract value from object in array form : [42,42,50]

obtScore.forEach((items)=>{
  sum = sum + items;
})

const percent = (sum/150)*100
console.log(percent)



//Q2

const userDetails={
    name: "kaylin",
    maths: 23,
    science: 35,
    gk:30
}

// {
//     userName: 'kaylin',
//     subjectCodes: ['M','S', 'G'],
//     subjectScores: [23,35,30]
// }

const newDetails = (name, subjectCodes, subjectScore) => ({
  name,
  subjectCodes,
  subjectScore
});

const details1 = newDetails(name, ["M", "S", "G"], [23, 35, 30]);

console.log(details1);
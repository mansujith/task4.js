//write a java script fuunction that multiplies each element of an array by 2
let arraysu=[1,2,3,4,5,50];
//multiply each of an array by 2
let sujith=arraysu.map(x=>x*2);
console.log(sujith);
//filtering code of the javascript
const filteredArr = sujith.filter(num => num <= 50);
console.log(filteredArr);
//sum of the filtereda array
let newarray01=filteredArr.reduce((total,num)=>total +num,0);
console.log(newarray01);


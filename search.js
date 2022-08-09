const sberData = require('./sber.json');



const data = '04.12.2019';
let a = data.split('.').reverse();

b = new Date(a);
b = b.getTime();

console.log(a);
console.log(b);
//console.log(sberData.CardInfo[0].ExpDate);

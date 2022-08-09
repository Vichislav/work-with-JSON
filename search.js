const sberData = require('./sber.json');

const Data = '04-12-2019';

function getMilliSecTime(data) {
    let a = data.split('-').reverse(); //превратили в массив и развернули
    let b = new Date(a); // создали новую дату
    let c = b.getTime(); // перевили дату в милисекунды
    return c;
}

let arr = sberData.CardInfo
    .map(card => {
    currentData = getMilliSecTime(card.ExpDate);
    return {
        "CardNumber": card.CardNumber,
        "CardName": card.CardName,
        "ExpDate": currentData
    }
})
    .filter(card => card.ExpDate < getMilliSecTime(Data))
    .map(card => card.CardNumber.substr(12, 4))

console.log(arr);

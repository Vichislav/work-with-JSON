const sberData = require('./sber.json');//запрашиваем json

const sDate = '04-12-2019'; // Date с чем сравниваем (эталон)

function getMilliSecTime(data) {
    let a = data.split('-').reverse(); //превратили в массив и развернули
    let b = new Date(a); // создали новую дату
    let c = b.getTime(); // перевили дату в милисекунды
    return c;
}

function getCardsArrayExpDate(json, date) {
    let Date = getMilliSecTime(date) // перевод даты (эталона) в нужный вид
    let arr = json.CardInfo
        .map(card => {
            currentData = getMilliSecTime(card.ExpDate); //настраиваем дату в сравняемый формат
            return {
                "CardNumber": card.CardNumber,
                "CardName": card.CardName,
                "ExpDate": currentData // помещаем дату в новый массив
            }
        })
        .filter(card => card.ExpDate < Date) //сравниваем ее с нужной датой, лишнее фильтруем
        .map(card => card.CardNumber.substr(12, 4)) // создаем новый массив только из фрагментов № карт
    if(arr.length == 0)  return null;
    else return arr; // проверка на пустой массив
};
//часть задания с некорректными входными данными не совсем понял как реализовать, увы
    console.log(getCardsArrayExpDate(sberData, sDate)); //проверка

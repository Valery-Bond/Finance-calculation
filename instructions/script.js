'use strict';

let money = +prompt ("Ваш бюджет на месяц?", ""),
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    saving : false
};

for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {

        console.log("done");

        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        
        i--;
    }

    i++;

};

appData.moneyPerDay = appData.budget / 30;

alert ("Your daily budget is 1 day: " + appData.moneyPerDay + "$");

if (appData.moneyPerDay < 100 ) {
    console.log("Минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1500) {
    console.log("Cредний уровень достатка!");
} else if (appData.moneyPerDay > 1500 && appData.moneyPerDay <5000) {
    console.log("Достаточный уровень достатка!");
} else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 25000) {
    console.log("высокий уровень достатка!");
} else if (appData.moneyPerDay > 25000) {
    console.log("Очень высокий уровень достатка!");
} else {
    console.log("Произошла ошибка!");
}

'use strict';

let money, time;

function start () {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null)  {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) { 
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""), 
            b = prompt("Во сколько обойдется?", "");    

        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b!= '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b; 

        } else { 
            i--;
        }    
    }
}
chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет" + appData.moneyPerDay + "$");
}
detectDayBudget();


function detectLevel () {
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
}
detectLevel();


function chechSavings () {
    if (appData.savings == true) {
        let save = +prompt ("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");

        appData.monthInCome = save / 100 / 12 *persent;

        alert("Доход в месяц с вашего депозита: " + appData.monthInCome)
            
        }
    
}
chechSavings();


function costItem () {
    for (let i = 1; 1 <= 3; i++) {
        let expens = +prompt ("Статья необязательных расходов?");

        appData.optionalExpenses[i] = expens;

    //alert("Ваша статья необязательных расходов" + appData.optionalExpenses + "$" );
        console.log(appData.optionalExpenses);
    }

}

costItem();

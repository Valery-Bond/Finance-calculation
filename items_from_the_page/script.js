
'use strict';

let index = document.getElementById('start');

let budget = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0];

let chooise = document.getElementsByClassName('choose-expenses'),
    item = document.getElementsByClassName('expenses-item');



let btnExpensItem = document.getElementsByTagName('button')[0], 
    btnOptExpens = document.getElementsByTagName('button')[1], 
    btnCountBudget = document.getElementsByTagName('button')[2];

let allExpensItem = document.querySelectorAll(".optionalexpenses-item");

let choose = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    years = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    
    
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
    savings : true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        
        alert("Бюджет на 1 день составляет" + appData.moneyPerDay + "$");
    },
    detectLeve: function () {
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
    },
    chechSavings: function() {
        if (appData.savings == true) {
            let save = +prompt ("Какова сумма накоплений?"),
                persent = +prompt("Под какой процент?");

            appData.monthInCome = save / 100 / 12 * persent;

            alert("Доход в месяц с вашего депозита: " + appData.monthInCome);

        }
    },
    costItem: function() {
        for (let i = 1; 1 <= 3; i++) {
            let expens = +prompt ("Статья необязательных расходов?");

            appData.optionalExpenses[i] = expens;

            console.log(appData.optionalExpenses);
        }
    },
    chooiseIncome: function () {
        let items = prompt ("Что принесет дополнительный доход? (перечислите через запятую)", "");

        appData.income = items.split(", ");
        appData.income.push(prompt("Может, что-то еще?"));
        appData.income.sort();

        appData.income.forEach (function(items, i, income) {
            console.log("Способы доп. заработка:  " + i++   + ':' + items + income);
        });
    }


};


for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}

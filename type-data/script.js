'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        answer1: answer2
    },
    optionalExpenses: {},
    income : [],
    saving : false
};

let consumption = prompt("Введите обязательную статью расходов в этом месяце", ""),
    optionalExpenses = prompt("Во сколько обойдется?", "");
    consumption = prompt("Введите обязательную статью расходов в этом месяце", ""),
    optionalExpenses = prompt("Во сколько обойдется?", "");

appData.expenses.answer1 = consumption;
appData.expenses.answer2 = optionalExpenses;

calculation = appData.money / 30;

alert ("Your daily budget is 1 day: " + calculation + "$");

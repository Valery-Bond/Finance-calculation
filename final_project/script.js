
'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavValue = document.getElementsByClassName('yearsavings-value')[0], 
    chooseExpres = document.getElementsByClassName('choose-expenses'),
    allExpensesItem = document.getElementsByClassName('expenses-item'),
    btnItemExspenses = document.getElementsByTagName('button')[0], 
    btnOptionalExpenses = document.getElementsByTagName('button')[1], 
    btnCountBudget = document.getElementsByTagName('button')[2],
    allOptionalExpensItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'), 
    sumValue = document.querySelector('.choose-sum'),
    percValue = document.querySelector('.choose-percent'),
    years = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
    
let money, time;

startBtn.addEventListener('click', function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money == "" || money == null)  {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    years.value = new Date (Date.parse(time)).getFullYear();
    month.value = new Date (Date.parse(time)).getMonth() + 1;
    day.value = new Date (Date.parse(time)).getDate();
});

btnItemExspenses.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < allExpensesItem.length; i++) {
        let a = allExpensesItem[i].value, 
            b = allExpensesItem[++i].value; 
        if ((typeof (a)) !=null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
        expensesValue.textContent = sum;
    }
});

btnOptionalExpenses.addEventListener('click', function() {
    for (let i = 0; 1 < allOptionalExpensItem.length; i++) {
        let opt = allOptionalExpensItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + "";
    }  
});

btnCountBudget.addEventListener('click', function() {

    if (appData.budget != undefined ) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100 ) {
            levelValue.textContent = "Минимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1500) {
            levelValue.textContent = "Cредний уровень достатка!";
        } else if (appData.moneyPerDay > 1500 && appData.moneyPerDay < 5000) {
            levelValue.textContent = "Достаточный уровень достатка!";
        } else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 25000) {
            levelValue.textContent = "Высокий уровень достатка!";
        } else if (appData.moneyPerDay > 25000) {
            levelValue.textContent = "Очень высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка!";
        }   

    } else {
        dayBudgetValue.textContent = "Произошла ошибка!";
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;

        appData.income = items.split(", ");
        incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            persent = +percValue.value; 

        appData.monthInCome = sum / 100 / 12 * persent;
        appData.yearSavValue = sum / 100 * persent;

        monthSavValue.textContent = appData.monthInCome.toFixed(1);
        yearSavValue.textContent = appData.yearSavValue.toFixed(1);
    }
});

percValue.addEventListener('input', function(){
    if (appData.sum == true) {
        let sum = sumValue.value,
            persent = +percValue.value; 

        appData.monthSavValue = sum / 100 / 12 * persent;
        appData.yearSavValue = sum / 100 * persent;

        monthSavValue.textContent = appData.monthSavValue.toFixed(1);
        yearSavValue.textContent = appData.yearSavValue.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings : false
};

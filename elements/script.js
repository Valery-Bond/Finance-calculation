'use strict';

let navBar = document.getElementsByClassName('menu')[0],
    classItem = document.getElementsByClassName('menu-item'),    
    fiveElement  = document.createElement ('li'),
    text = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptQuest = document.getElementById ('prompt');


navBar.insertBefore (classItem[2], classItem[1]);

fiveElement.classList.add('menu-item'); // добавили новый 5-й элемени (список) в коней списка
                                        // добавляем класс модификатор
//fiveElement.innerHTML = '<title>Five element</title>';
fiveElement.textContent = 'Five element';
navBar.appendChild(fiveElement); // добавили в коней списка


document.body.style.backgroundImage = "url('img/michal-kubalczyk-787999-unsplash.jpg')";


text.textContent = "Мы продаем только подлинную технику Apple";
//text.innerHTML = "Мы продаем только <strong>подлинную</strong> технику Apple";


adv.remove(adv);


let question = prompt('Ваше отношение к технике apple?');
promptQuest.textContent = question;

// promptQuest = question;
// promptQuest.textContent = '';

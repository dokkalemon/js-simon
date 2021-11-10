/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
da indovinare sono stati individuati.
*/


//generiamo un array di numeri
const numberList = 5;
const numbers = [];

for (let i = 0; i < numberList; i++) {
    numbers.push(genRand());
};

console.log(numbers);


//hetml ref
const numberCont = document.querySelector('.number-conteiner');

//costruiamo la struttura html con i numeri dell'array
for (let i = 0; i < numbers.length; i++) {

   const number = genHTML(numberCont, numbers, i);

    
}

//timer
let timer = 30;
const timerCont = document.querySelector('.timer-cont');

const time = setInterval(reduceTime, 1000)

console.log(time);






//-----------------FUNCTION----------------//
//generiamo numeri random

function genRand() {
    return Math.floor( Math.random() * 100 + 1)
}

//funzione per generare la struttura
function genHTML(numberCont, numbers, num) {
    const numberItem = document.createElement('div');
    numberItem.classList.add('number-items')
    numberCont.append(numberItem);

    numberItem.innerHTML += numbers[num];

    setTimeout(hiddenNumb, 3000)
}


function hiddenNumb() {
    numberCont.classList.add('d-none')
}

function reduceTime() {
    return --timer
}

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

let userNumb = [];

for (let i = 0; i < numberList; i++) {
    numbers.push(genRand());
};

console.log(numbers);


//hetml ref
const numberCont = document.querySelector('.number-conteiner');


//timer
let timer = 3;
const timerCont = document.querySelector('.timer-cont');

timerCont.innerHTML = timer;


const time = setInterval(reduceTime, 1000)


//costruiamo la struttura html con i numeri dell'array
for (let i = 0; i < numbers.length; i++) {

   const number = genHTML(numberCont, numbers, i, time);

    
}

//chiediamo i numeri all'utente

/* for (let i = 0; i < numberList; i++) {
    promptNumb()
} */
   
    while (userNumb.length = numbers.length) {
    const userNumPrompt = parseInt( prompt('primo numero') );

    userNumb.push(userNumPrompt); 
    console.log(userNumb);
} 













//-----------------FUNCTION----------------//
//generiamo numeri random

function genRand() {
    return Math.floor( Math.random() * 100 + 1)
}

//funzione per generare la struttura
function genHTML(numberCont, numbers, num, time) {
    const numberItem = document.createElement('div');
    numberItem.classList.add('number-items')
    numberCont.append(numberItem);

    numberItem.innerHTML += numbers[num];

    setTimeout(hiddenNumb, 3100)

   
}

function hiddenNumb() {
    numberCont.classList.add('d-none');

    //stoppiamo il timer allo 0
    clearInterval(time)

}

function reduceTime() {
    timer--;

   timerCont.innerHTML = timer;

   if (timer <= 5) {
       timerCont.style.color = 'red';
   }

}


//chiediamo i numeri
function promptNumb() {
    const userNumPrompt = parseInt( prompt('primo numero') );

    userNumb.push(userNumPrompt); 
}


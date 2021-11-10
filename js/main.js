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

const userNumb = [];
const numberChecked = []


for (let i = 0; i < numberList; i++) {
    numbers.push(genRand());
};

console.log(numbers);


//hetml ref
const numberCont = document.querySelector('.number-conteiner');


//timer
let timer = 30;
const timerCont = document.querySelector('.timer-cont');

timerCont.innerHTML = timer;


const time = setInterval(reduceTime, 1000)


//costruiamo la struttura html con i numeri dell'array
for (let i = 0; i < numbers.length; i++) {

   const number = genHTML(numberCont, numbers, i, time);

    
}

const controlNumb = setTimeout(control, 31000)



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

    setTimeout(hiddenNumb, 30000)

   
}

//nascondiamo i numeri
function hiddenNumb() {
    numberCont.classList.add('d-none');

    //chiediamo i numeri all'utente
    while (userNumb.length < numberList) {
        const userNumPrompt = parseInt(prompt('Inserisci un numero che ricordi'));
    
        if (!isNaN(userNumPrompt)) {
            userNumb.push(userNumPrompt); 
    
        }
    };
}

//riduciamo il tempo
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


//confrontiamo i numeri
function control() {
    numberCont.classList.remove('d-none'); 

    for (let i = 0; i < numberList; i++) {
        if (userNumb.includes(numbers[i])) {
            numberChecked.push(numbers[i]);
        } 
    }

    if (numberChecked.length != 0) {
        clearInterval(time)
        numberCont.classList.remove('d-none');
        timerCont.innerHTML = `Hai indovinato ${numberChecked.length} numeri`;
    } else {
        clearInterval(time)
        timerCont.innerHTML = `Non hai indovinato nessun numero`
    }

    //togliamo i numeri non indovinati
    const allNum = document.querySelectorAll('.number-items');

    for (let i = 0; i < numberList; i++) {

        if (!numberChecked.includes(parseInt(allNum[i].innerHTML))) {
            allNum[i].innerHTML = '';
        }    
    }
    
    
    
    
    
}


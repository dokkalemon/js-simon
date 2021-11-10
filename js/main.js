/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri 
da indovinare sono stati individuati.
*/


//HTML ref
const numbConteiner = document.querySelector('.number-conteiner');

//costruiamo la struttura
for (let i = 0; i < 5; i++) {
    const numberItems = document.createElement('div');
    numberItems.classList.add('number-items');
    numbConteiner.append(numberItems);

    const numbP = document.createElement('p');
    numberItems.append(numbP);

    numbP.innerHTML += genRand()

}

//nascondiamo i numeri
const numbPAll = document.querySelectorAll('.number-items p');

const clock = setTimeout(hiddenNumb, 30000) 

//timer di 30 secondi 

let timer = document.querySelector('.timer-cont');

timer.innerHTML += parseInt(30);

const timerFunction = setInterval(timerCount, 100)


//interrompiamo la diminuzione di secondi dopo lo zero
if (timer.innerHTML <= 1) {
    clearInterval(timerFunction)
}







//-----------------FUNCTION----------------//
//generiamo numeri random

function genRand() {
    return Math.floor( Math.random() * 100 + 1)
}

console.log(genRand());


//funzione nasconde i numeri
function hiddenNumb() {
    
    for (let i = 0; i < numbPAll.length; i++) {
    numbPAll[i].classList.add('d-none')
    }
}

//funzione di riduzione del timer;
function timerCount() {
    timer.innerHTML -= 1;

    if (timer.innerHTML <= 5) {
        timer.style.color = 'red'
    };

 
}


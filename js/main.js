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








//-----------------FUNCTION----------------//
//generiamo numeri random

function genRand() {
    return Math.floor( Math.random() * 100 + 1)
}

console.log(genRand());



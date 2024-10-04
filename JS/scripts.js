

let contador = 1;
document.getElementById('radio1').cheked = true;

setInterval(() => {
    correImagem();
}, 5000); /*5000 milisegundos = 5 segundos*/ 

function correImagem(){
    contador++; /* soma mais 1 no let */
    if(contador > 4){ /* se maior que quatro voltar pro 1 */
       contador = 1;
    }
    document.getElementById('radio'+ contador).checked = true;
}


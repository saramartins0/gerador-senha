const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha-1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha <20) {
        tamanhoSenha = tamanhoSenha+1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox[0]checked);

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinuscula = 'abcdefghijklmnopqrstuvwxyz';
const numero = '0123456789';
const simbolo = '!@#$%*?'
geraSenha();

function geraSenha(){
let senha ='';
    for (let index = 0; index < tamanhoSenha; index++) {
    let numeroAleatorio = Math.random()*letrasMaiusculas.lenght;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    }
campoSenha.value = letrasMaiusculas;
}
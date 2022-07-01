//Chamar a ID input1 e input2.
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

//Chamar as classes de button na posição.
const soma = document.getElementsByClassName('button')[0];
const subtracao = document.getElementsByClassName('button')[1];
const divisao = document.getElementsByClassName('button')[2];
const multiplicacao = document.getElementsByClassName('button')[3];

//Criar uma função de operação.
function operacao() {
  //Adicionar um evento em outra função.
  soma.addEventListener('click', function () {
    //Adicionei a conta soma na variavel contaSoma.
    let contaSoma = parseInt(input1.value) + parseInt(input2.value);
    //Chamei a caixa onde vai aparecer o resultado.
    let caixaResultado = document.getElementById('pResult');
    //Falei que a caixaResultado recebe o resultado da conta na variavel contaSoma.
    caixaResultado.innerText = contaSoma

  })

  subtracao.addEventListener('click', function () {
    let contaSubtacao = parseInt(input1.value) - parseInt(input2.value);
    let caixaResultado = document.getElementById('pResult');
    caixaResultado.innerText = contaSubtacao

  })

  divisao.addEventListener('click', function () {
    let contaDivisao = parseInt(input1.value) / parseInt(input2.value);
    let caixaResultado = document.getElementById('pResult');
    caixaResultado.innerText = contaDivisao

  })

  multiplicacao.addEventListener('click', function(){
    let contaMultiplicacao = parseInt(input1.value) * parseInt(input2.value);
    let caixaResultado = document.getElementById('pResult');
    caixaResultado.innerText = contaMultiplicacao

  })

}

operacao()
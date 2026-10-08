function sortear(){
    let quantidade = parseInt (document.getElementById('quantidade').value);
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    let sorteados = [];

    for(let i = 0; i <quantidade; i++){
        numero = obeterNumeroAleatorio (de, ate);

        while(sorteados.includes(numero)){
            numero = obeterNumeroAleatorio (de, ate);
        }
        sorteados.push(numero);

    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ` <label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarEstatusBotao();
}


function obeterNumeroAleatorio(min, max){

    min= Math.ceil(min);
    max= Math.floor(max);

    return Math.floor (Math.random() * (max - min + 1)) + min;

}

function alterarEstatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('conteiner__botao');
    }else{
        botao.classList.remove('conteiner__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: </label>';
    alterarEstatusBotao();
}

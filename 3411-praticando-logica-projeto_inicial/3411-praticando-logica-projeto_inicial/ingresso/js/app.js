function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarPista(qtd);
    } else if(tipo.value == 'superior'){
        comprarSuperior(qtd);
    }else if(tipo.value == 'inferior'){
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdpista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdpista){
        alert('quantidade de ingressos indisponivel');
    }else{
        qtdpista = qtdpista - qtd;
        document.getElementById('qtd-pista').textContent = qtdpista;
        alert('ingresso comprado com sucesso');
    }
}

function comprarSuperior(qtd) {
    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdsuperior){
        alert('quantidade de ingressos indisponivel');
    }else{
        qtdsuperior = qtdsuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdsuperior;
        alert('ingresso comprado com sucesso');
    }
}
function comprarInferior(qtd) {
    let qtdinferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdinferior){
        alert('quantidade de ingressos indisponivel');
    }else{
        qtdinferior = qtdinferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdinferior;
        alert('ingresso comprado com sucesso');
    }
}
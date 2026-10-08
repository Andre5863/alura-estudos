let amigos = [];// Array para armazenar os amigos sorteados

function adicionar() {
   let amigo = document.getElementById('nome-amigo');// Pega o elemento do input de amigo
   if(amigo.value == ''){
    alert('Digite o nome do amigo!');// Se o input estiver vazio, exibe um alerta
    return;// Sai da função se o input estiver vazio
   }

   if(amigos.includes(amigo.value)){// Verifica se o nome do amigo já está na lista
    alert('Nome já adicionado!');// Se o nome do amigo já estiver na lista, exibe um alerta
    return;// Sai da função se o nome do amigo já estiver na lista
   }

   let lista = document.getElementById('lista-amigos'); // Pega o elemento da lista de amigos
  
   amigos.push(amigo.value);// Adiciona o valor do input ao array de amigos
  
   if(lista.textContent == ''){
        lista.textContent = amigo.value;// Se a lista estiver vazia, adiciona o valor do input à lista de amigos
    }else{
        lista.textContent =  lista.textContent +', ' + amigo.value;
    }// Adiciona o valor do input à lista de amigos, separando por vírgula se já houver amigos na lista
    amigo.value = '';// Limpa o input de amigo

   
}

  // Função para sortear um amigo da lista
    function sortear(){
        if (amigos.length < 4) {// Verifica se há pelo menos 4 amigos na lista
            alert('Adicione pelo menos 4 amigos para realizar o sorteio!');// Se houver menos de 4 amigos na lista, exibe um alerta
            return;// Sai da função se houver menos de 4 amigos na lista
        }


     embaralhar(amigos);// Chama a função para embaralhar a lista de amigos
     
     let sorteio = document.getElementById('lista-sorteio');
     for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){// Se for o último amigo da lista, ele tira o primeiro amigo da lista
            sorteio.innerHTML = sorteio.innerHTML + amigos[0] + '-->' + amigos[i+1] + '<br>';// Adiciona o amigo sorteado à lista de sorteio, mostrando quem tirou quem
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';// Adiciona o amigo sorteado à lista de sorteio, mostrando quem tirou quem
        }
     }
    
    }  
    
    function excluirAmigos() {
        amigos.splice(index, 1); // Remove o amigo do array
        atualizarLista(); // Atualiza a lista de amigos exibida
        atualizarSorteio(); // Atualiza a lista de sorteio exibida
    }

    function embaralhar(lista) {
        for (let indice = lista.length; indice; indice--) {
            const indiceAleatorio = Math.floor(Math.random() * indice);
            [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
        }
    }

    function atualizarLista() {
        let sorteio = document.getElementById('lista-sorteio');
        sorteio.innerHTML =''; // Limpa a lista de sorteio
    }

    function atualizarSorteio() {
        let lista = document.getElementById('lista-amigos');
        lista.innerHTML = ''; // Limpa a lista de amigos

        for (let i = 0; i < amigos.length; i++) {
            let paragrafo = document.createElement('p');
            paragrafo.textContent = amigos[i];

            paragrafo.addEventListener('click',function() {
                excluirAmigos(i); // Chama a função para excluir o amigo ao clicar no parágrafo
            });

            lista.appendChild(paragrafo); // Adiciona o parágrafo à lista de amigos
        }
    }
    console.log(amigos);

    // Função para reiniciar a lista de amigos e a lista de sorteio
 function reiniciar(){
    document.getElementById('lista-amigos').textContent = '';// Limpa a lista de amigos
    document.getElementById('lista-sorteio').textContent = '';// Limpa a lista de sorteio
}

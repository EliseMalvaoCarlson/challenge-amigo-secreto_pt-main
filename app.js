//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('#amigo').value.trim(); // Obtém o valor do campo de entrada e remove espaços em branco
    if (nomeAmigo === "") { // Verifica se o campo de entrada está vazio
        alert("Por favor, insira um nome válido."); // Exibe um alerta se o campo estiver vazio
        return; // Sai da função se o campo estiver vazio
    }
    listaAmigos.push(nomeAmigo); // Adiciona o nome à lista de amigos
    exibirListaAmigos(); // Atualiza a exibição da lista de amigos
    document.querySelector('#amigo').value = ""; // Limpa o campo de entrada
}

function exibirListaAmigos() {
    let lista = document.querySelector('#listaAmigos'); // Seleciona o elemento da lista de amigos
    lista.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join(''); // Atualiza a lista com os nomes dos amigos
}

function sortearAmigo() {
    if (listaAmigos.length === 0) { // Verifica se a lista de amigos está vazia
        alert("A lista de amigos está vazia. Adicione pelo menos um nome."); // Exibe um alerta se a lista estiver vazia
        return; // Sai da função se a lista estiver vazia
    }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; // Seleciona um amigo aleatoriamente
    document.querySelector('#resultado').innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`; // Exibe o nome do amigo sorteado
}

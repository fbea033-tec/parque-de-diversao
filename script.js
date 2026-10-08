// Função para encontrar o vencedor
function encontrarVencedor(amigos) {
  // Ordena os amigos pela altura (maior para menor)
  amigos.sort((a, b) => b.altura - a.altura);

  // O primeiro da lista é o vencedor
  let vencedor = amigos[0];
  console.log(`O vencedor é ${vencedor.nome}, com ${vencedor.altura} metros!`);
}

// Criando os 3 amigos com nome e altura
let amigo1 = { nome: "Carlos", altura: 2.5 };
let amigo2 = { nome: "Ana", altura: 3.2 };
let amigo3 = { nome: "Bruno", altura: 2.8 };

// Lista de amigos
let listaAmigos = [amigo1, amigo2, amigo3];

// Chamando a função
encontrarVencedor(listaAmigos);

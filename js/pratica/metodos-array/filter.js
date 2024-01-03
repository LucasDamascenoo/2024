const scores = [10, 30, 1, 2, 4, 6, 12, 90, 1];

const scorePar = scores
  .filter((i) => {
    return i % 2 === 0;
  })
  .map((score) => {
    return score * 2;
  });

console.log(scorePar);
console.log(scores);

const pedidos = [
  {
    id: 420,
    nome: "Lucas",
    alimento: "sandubão de Bacon",
    bebida: "suco de limão",
    preco: 33,
  },

  {
    id: 4180,
    nome: "Tati",
    alimento: "sandubão de frango",
    bebida: "guarana",
    preco: 40,
  },

  {
    id: 33,
    nome: "Bruce",
    alimento: "golden de carne",
    bebida: "agua",
    preco: 12,
  },
];

pedidos.map((pedido) => {
  console.log(pedido);
});

const valorPagar = pedidos.reduce((total, pedido) => {
  return total + pedido.preco;
}, 0);

console.log(valorPagar);

console.log();

const returne = pedidos.find((item) => item.preco > 30);

console.log(returne);

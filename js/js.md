# Métodos de Array

## Filter

Usado para filtar um valor de acordo com uma certa condição, caso seja true, devolve um novo array.

```js:

const scores = [10, 30, 1, 2, 4, 6, 12, 90, 1];

const scorePar = scores.filter((i) => {
  return i % 2 === 0;
});


//retornando apenas scores que são pares 6([ 10, 30, 2, 4,6,12,90 ])


```

**Não Altera o array original**

## Map

Usado para iterar sobre arrays e tambem manipular dados do determinado array.

```js:

const pedidos = [
  {
    id: 420,
    nome: "Lucas",
    alimento: "sandubão de Bacon",
    bebida: "suco de limão",
  },

  {
    id: 4180,
    nome: "Tati",
    alimento: "sandubão de frango",
    bebida: "guarana",
  },

  {
    id: 33,
    nome: "Bruce",
    alimento: "golden de carne",
    bebida: "agua",
  },
];

const result = pedidos.map(pedido => {
  if(pedido.id === 420){
    return pedido.nome = "Lucas Oliveira"
  }
})

// estamos iterando o array pedidos, verificando o id e se for true mudamos o nome que está no pedido


```

## Reduce

Reduce tem como objetivo encontrar a soma/concatenação com base em todo um array.

```js:


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


const valorPagar = pedidos.reduce((total, pedido) => {
  return total + pedido.preco;
}, 0);

```

Com o reduce podemos reduzir um determinado valor do array em um unico valor (somado,multiplicado) por exemplo;

Mas como funciona o reduce?

- 1º passamos 2 argumentos (obrigatorios) o acumulador e o item (cada valor do array)
- 2º o aculador é o valor "salvo" em cada rodada da iteração
- 3º o pedido é cada valor individual do array
- 4º cada rodada soma o acumulador(total) + o item

e aquele zero no final ali?
No reduce podemos inserir qual o valor inicial do nosso acumulador(total), no nosso exemplo, começamos por 0

## Find

find é semelhante ao filter, vai retornar em um novo array o valor que foi determinado na condição.

```js:


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



const encontre = pedidos.find((pedido) => {
  return pedido.preco > 30;
});

/*
{
  id: 420,
  nome: 'Lucas',
  alimento: 'sandubão de Bacon',
  bebida: 'suco de limão',
  preco: 33
}

*/


```

**Caso a condição contemple + de um valor do array, vai trazer somente o primeiro (de cima para baixo)**

# LocalStorage

LocalStorage é uma maneira de guarda dados no navegador (diferente do session storage) os dados persistem até que sejam apagados

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

- Só armazena Strings
- Use JSON.stringify para guardar um objeto/array em localStorage
- Usa um conjunto de chaves/valor

## Sintax

LocalStorage precisa de 2 parametros (o nome e o valor)

```js:

localStorage.setItem('nome','Lucas');


```

**Para ver esses dados guardados no navegador precisamos ir em:Aplication >Storage**

## Obtendo dados do LocalStorage

```js:

nome = localStorage.getItem(nome)


```

- Caso o dado não exista retorna null
- JSON.parse transforma uma string em um array/objeto

## Como eliminar dados do LocalStorage

```js:



const deletaNome = localStorage.removeItem(nome)
const limpaTudo = localStorage.clear()

```

# Datas

Podemos trabalhar com datas utilizando o objeto date().

- new Date()

- método get:

usando o get como por exemplo :

```js:

const hj = new Date();

const ano = hoje.getYear();

// 2024


```

- método set

Já com o set podemos modificar dados de datas

- dayJs

[dayJs](https://day.js.org/) é uma biblioteca que nos ajuda a trabalharmos com datas no Javascript

# Bugs e Debugs

- "Bugs" são erros em nossas aplicações que atrapalham uma funcionalidade ou causam um erro inesperado.

- "Debugs" é o aposto, é procurar/investigar o código para evitar problemas e erros.

# Js Assincrono

- Js por padrão é sincrono ou seja, executa linha após linha onde aguarda a linha anterior parar para dar sequencia nas demais ( ou seja, se a lista 1 do código estiver sem erro e a 2 com, a 3 em diante não sera exibida/executada)

- Js assincrono podemos executar + de um processo ao mesmo tempo sem a necessidade do primeiro ser concluido para ir para os demais

- Js assincrono "mais usado" no backend ou na chamada de apis

## setTimeout e setInterval

- Funcoes assincronas/eventos de tempo

- setTimeout : executa uma funcao depois de esperar um tempo determinado de milisegundos

- setInterval : executa uma funcao depois de esperar um tempo determinado mas repete a execucao da funcao continuamente

```js:
const fz = document.querySelector(".fz");
const btn = document.querySelector(".btn-fz");

function chanceFz() {
  setTimeout(() => {
    fz.style.fontSize = "6.25rem";
  }, 3000);
}

btn.addEventListener("click", chanceFz);

```

No exemplo acima criamos uma funcao que aumenta o tamanho da fonte apos 3 segundo e adicionamos essa funcao em um evento de botao, ou seja, quando clicado vai executar essa funcao e apos 3 segs a fonte ira aumentar

## Promises

Promises(object) sao promesas da vida real ou seja esta esperando algo, essas promessas podem ser cumpridas como tambem podem ser quebradas(nao executada).

- por padrao o js tem algumas funcoes que ja sao promises como o setIntervall
- new promise eh o jeito de criamos uma promise "do zero"
- as promises precisam de 2 argumentos (resolve e reject)

Quando trabalhamos com promises podemos utilizar 3 parametros:

- .then() : utilizado para chamar o resolv da promessa
- .catch() : utilizado para chamar/informar o reject da promessa
- .finally() : utilizado para executar qualquer coisa que esteja na promessa e que seja necessario rodar mesmo que nao tenha dado resolved ou rejected

```js:

function userGit() {
  fetch("https://api.github.com/users/LucasDamascenoo")
    .then((require) => {
      require.json().then((data) => {
        console.log(data);
      });
    })
    .catch((err) => {
      console.log("error", err);
    });
}

userGit();


```

No exemplo acima criamos uma funcao que dentro tem um fetch(promessa) utilizado para chamar uma api

- Primeiro then : criamos um then para a requisicao e passamos para um json(promessa)
- Segundo then: criamos um outro then para ler os dados (ja em formado json) e lemos esses dados no console

**_promises utilizando o then,catch e finally fica muito verboso pois criamos uma serie de .then.catch para cada cenarios por isso utilizamos asyn/await_**

## Async/await

- Async transforma em uma funcao assincrona
- Await transforma a funcao uma promise

```js:

async function greeting(){

  let result = await displayGreeting()
}

greeting()

```

**_Mas e os tratamentos de erros?_**

Para trabalhar com o sucesso e os erros de um bloco de codigo asyn/await vamos utilizar:

- try : sucesso
- catch : erro

## HTTP

- HTTP eh um protocolo de envio e recebimendto de dados na web

- Cliente/servidor onde o cliente eh o usuario(browser) e o servidor eh onde esta o dados que estamos solicitando

- Request eh o termo quando um usuario pede algo e o Response eh a resposta do servidor

- Response(resposta) pode ser um HTML, css, js files, imgs ou mais comum que sao os Json ou xml

### Fazendo Request

- Ajax/XmlHtppRequest sao as formas originais de solicitar dados mas nos temos atuais fazemos de forma mais morderna com o Fetch API

### HTTP Metodos

- Get (recebe/recupera dados de um servidor)
- Post (envia dados para um servidor)
- Put e Patch (atualiza dados no servidor)
- Delete (deleta dados de um servidor)

### Status code

- 100 (continue)
- 200 (sucess) 200 sucess
- 300 (redirects) 301 - resouce moved
- 400 (client error) 400 bad request - 404 not found
- 500 (sever error) 500 error on server

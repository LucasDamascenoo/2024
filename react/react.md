# React

React é uma biblioteca js utilizada para criar interfaces interativas para o usuario (não necessariamente apenas web).

- web (react-dom)
- mobile (react-native)
- tv
- realidade virtual

# Roadmap de aprendizado

- Core of react (jsx,componentes,props,estados,ciclos de vida,hooks,eventos,forms,)
- Reutilização de componentes (props)
- Como propagar mudanças (hooks)
- State managent (react n possue) redux,redux tookit,content api
- Class component (legacy)
- Baas Apps (ecom app, social midia)

- Frameworks (apos masterizar react) Next,Gastby,Remix

# Como o React Funciona?

Como o nome 'Diz' ele reage as interacoes do usuario (react)

- Altera o Virtual DOM(copia do dom + leve)
- Compara o Virtual DOM vs o DOM e faz as alteracoes com base nas diferencas entre os 2
- Com o react a gente nao mexe com o DOM

## Vite

Vite é bundler usadado para criar booleplate das nossas aplicações webs sem a necessidade de um compilador como webpack.

## O que é são patterns de redenrização: ?

- SSR: É o conceito de carregar as informações que o Browser (Usuario) solicita apenas quando o server processa toda a informação e todo o frontend(html,css,js) e só depois de ter tudo carregado trás as infos/tela pro usuario.

- SPA: Nesse conceito, o Browser(Usuario) solicita algo, o servidor não é mais responsavel de carregar o todo o Frontend(html,css,js), o servidor só retorna os dados solicitados (Json).

## Imperativo vs Declarativo

- Imperativo

Escrever códigos imperativo é focado em como chegar no resultado, pegar o elemento, adicionar o evento de click, adicionar um estilo, tudo isso é uma forma imperativa de como chegar no objetivo final

**Compre Leite: Abre a porta, vá até o mercado, escolha o leite mais barato, pegue a fila, pague, ponha na sacola,volte para casa, abre a porta, guarda na geladeira**

- Declarativo

Já a forma declarativa é focado em o que queremos, como por exemplo quando damos vida a um tag com o css (declara o resultado e fim)

**Compre Leite: Por favor, compre leite**

# Componentes

Componentes são pequenas partes, ou seja, dividmos a nossa aplicação em pedaços, que podem ser reutilizadas e repetidas diversas vezes em nossas aplicações, quando pensamos em reutilizacao de codigo, no HTML nao temos essa opcao, ja no css podemos considerar as classes e no Js as funcoes().

- Componentes são funções/classes que retorna HTML

- Os componentes precisam ou nao ter .jsx/.js (javascript + xml)

- Componentes só podem ser repetidos caso tenha um elemento em volta(pai/container)

- Componentes devem ser escrito com a primeira Letra maiscula para que não tenhamos confusão com tags html: footer - Footer

**No react tbm temos os hooks que nos permite reutilizar a logica**

## Formas de exportar Componentes

Temos duas formas de exportar componentes no react que são export default e export named

- export default Post(nome do componentes)
- export function Button (){}

## Modularizacao dos componentes

Por boas praticas nosso componentes devem ter uma pasta dedidica tal.

Componentes > Button.jsx > card.jsx

- Componentes devem ter apenas uma unica declaracao de funcao

## Fragment

Fragment é uma forma de encapsular componentes sem criar um elemento na dom , diferente de quando fazer esse encapsulamento com uma div por exemplo, o dom cria essa div sem necessidade, criando um problema de semantica

## Jsx

Jsx é usado para renderizar o que queremos com o react, sem o jsx (js + xml) nossa escrita em react seria muito verbosa e complicada.

**Sem Jsx**

```js:

import { createElement } from 'react'

function Hello () { // un componente es una función! 👀
  return React.createElement(
    'h1', // elemento a renderizar
     null, // atributos del elemento
    'Hola Mundo 👋🌍!' // contenido del elemento
  )
}

```

**Com Jsx**

```js:

function Hello () {
  return <h1>Hola Mundo 👋🌍!</h1>
}

```

**Obs: os mecanismo do Javascript nao sao capazes de interpretar o jsx, por isso precisamos de compiladores como (babel) para transformar nosso codigo jsx em algo que o navegador intenda**

**Obs2: Hoje nao necessita quer os arquivos em react tenham a extensao .jsx pois o mecanismo do js ja intende que o jsx e a sintaxe nao a extensao**

## Props

- Pros são propriedades de um componentes
- Com os props entra o "poder" dos componentes que é a sua reutilização

```js:
//componentes

export function Button(props){

  return (

<button>{props.texto}</button>

  )

}


```

No exemplo acima criamos um componente de botão, ao invez de passar o valor direto no componentes, criamos uma props.texto que vai servir para que quando usarmos esse componentes possamos setar o texto que quisermos e quantas vezes quiser, sem a necessidade de ter botões com valores diferentes.

```js:
//utilizando o componentes

function App() {
  return (
<>
      <Button texto="Aqui tem um texto do props" />
      <Button texto="Aqui tem um texto do props" />

</>
  )

}

```

**Desestruturacao em props**

- Tambem podemos usar uma sintaxe 'moderna' e mais clean criando props atraves da desestruturacao

```js:

export const Button = ({text})=>{

return
  <button>{text}</button>

}



function App() {
  return (
<>
      <Button texto="Aqui tem um texto do props" />
      <Button texto="Aqui tem um outro texto do props" />

</>
  )

}


```

## Vida de um componentes

quando criamos componentes queremos que ele seja util, ou seja, continuemos usando e atualizando os dados em toda a nossa aplicação, por esse "motivo" temos o ciclo de vida de um componentes que consiste em:

- Montagem
- Desmontagem/destruição
- Atualização

# Como conectamos Front com o Back?

O frontend conecta com o backend atraves de requisicoes/chamadas HTTP

- request(front) e retorna uma response(backend)

**Exemplos**

- Frontend > Resquet > Backend > Frontend: response: 200
- Frontend > Post{Task} > Backend > Frontend: response: 201

### Tipos de requicisoes

- GET: Recuperar dados
- POST: Criar dados
- PUT:Atualizar dados
- DELETE:Deletar os dados

### Status Code

Status code nos diz se a requisicao foi bem sucedida ou nao

**Status de Sucesso**

- 200: Ok
- 201: Created

**Status de erro**

- 400: Bad Resquest
- 403: Forbidden
- 404: Not found

# States

- Estados sao dados manipulados que reflete na aplicacao
- Estados um objeto onde guardadamos os dados de um determinado componente

## Hooks

Os hooks ajuda o react entender quando tem alguma mudanca dinamicamente no nosso componentes para que cada mudanca( seja: estado ou no ciclo de vida dos componentes funcionais) seja redenrizado no react.

- Hooks sao apis do React
- Hooks precisam ser importados
- Podemos criar nossos proprios Hooks (custom hook)

## useStates

- Utizado para gerenciar o estado de algum dado

- Como parametro temos a variavel iniciadora e uma funcao que modifica o estado de inicio

Hooks states e um hook que nos permite rastrear o estado em um componentes e altera-lo

```js:

import { useState } from "react";

export const Button = () => {
  // let someData = 10;

  const [number, setNumber] = useState(0);
  return (
    <>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>Mudar Variavel</button>
      <button onClick={() => setNumber(number + 1)}>Diminuir Variavel</button>
    </>
  );
};



```

- Criamos um variavel (useState) com valor inicial 0
- Como podemos ver temos uma desestruturacao, com number e setNumber
- Number: e a inicializacao do valor que vai redenrizado
- SetNumber : a funcao que vai modificar a variavel iniciadora

# Estilos

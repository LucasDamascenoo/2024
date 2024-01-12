# React

React é uma biblioteca js utilizada para criar interfaces interativas para o usuario (não necessariamente apenas web).

- web (react-dom)
- mobile (react-native)
- tv
- realidade virtual

## Roadmap de aprendizado

- Core of react
- Reutilização de componentes (props)
- Como propagar mudanças (hooks)
- State managent (react n possue) redux,redux tookit,content api
- Class component (legacy)
- Baas Apps (ecom app, social midia)

- Frameworks (apos masterizar react) Next,Gastby,Remix

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

## Componentes

Componentes são pequenas partes, ou seja, dividmos a nossa aplicação em pedaços, que podem ser reutilizadas e repetidas diversas vezes em nossas aplicações

- Componentes são funções que retorna HTML

- Todos os componentes precisam ter .jsx (javascript + xml)

- Componentes só podem ser repetidos caso tenha um elemento em volta(pai/container)

- Componentes devem ser escrito com a primeira Letra maiscula para que não tenhamos confusão com tags html: footer - Footer

## Formas de exportar Componentes

Temos duas formas de exportar componentes no react que são export default e export named

- export default Post(nome do componentes)
- export function Button (){}

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

## Vida de um componentes

quando criamos componentes queremos que ele seja util, ou seja, continuemos usando e atualizando os dados em toda a nossa aplicação, por esse "motivo" temos o ciclo de vida de um componentes que consiste em:

- Montagem
- Desmontagem/destruição
- Atualização

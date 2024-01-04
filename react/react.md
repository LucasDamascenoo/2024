# React

React é uma biblioteca js utilizada para criar interfaces interativas para o usuario (não necessariamente apenas web).

- web
- mobile
- tv
- realidade virtual

## O que é são patterns de redenrização: ?

- SSR: É o conceito de carregar as informações que o Browser (Usuario) solicita apenas quando o server processa toda a informação e todo o frontend(html,css,js) e só depois de ter tudo carregado trás as infos/tela pro usuario.

- SPA: Nesse conceito, o Browser(Usuario) solicita algo, o servidor não é mais responsavel de carregar o todo o Frontend(html,css,js), o servidor só retorna os dados solicitados (Json).

## Vite

Vite é usadado para criar booleplate das nossas aplicações webs sem a necessidade de um compilador como webpack.

## Imperativo vs Declarativo

- Imperativo

Escrever códigos imperativo é focado em como chegar no resultado, pegar o elemento, adicionar o evento de click, adicionar um estilo, tudo isso é uma forma imperativa de como chegar no objetivo final

- Declarativo

Já a forma declarativa é focado em o que queremos, como por exemplo quando damos vida a um tag com o css (declara o resultado e fim)

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

# Calculadora React

Este é um projeto de uma calculadora simples desenvolvida com **React** e **Vite**. A calculadora permite realizar operações matemáticas básicas, como adição, subtração, multiplicação e divisão.

---

## Estrutura do Projeto

```
index.html
package.json
src/
    ├── App.css
    ├── App.jsx
    └── main.jsx
vite.config.js
```

### Arquivos Principais

- **`index.html`**: Arquivo HTML principal que contém o ponto de montagem do React (`<div id="root"></div>`).
- **`package.json`**: Contém as dependências e scripts do projeto.
- **`vite.config.js`**: Configuração do Vite para o projeto.
- **`src/App.jsx`**: Componente principal da aplicação que implementa a lógica da calculadora.
- **`src/main.jsx`**: Ponto de entrada do React, onde o componente `App` é renderizado.
- **`src/App.css`**: Estilos da calculadora.

---

## Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- Gerenciador de pacotes **npm** ou **yarn**

### Passos

1. Instale as dependências do projeto:
     ```bash
     npm install
     ```
2. Inicie o servidor de desenvolvimento:
     ```bash
     npm run dev
     ```
3. Abra o navegador e acesse o endereço exibido no terminal (geralmente [http://localhost:5173](http://localhost:5173)).

---

## Funcionalidades

- **Operações básicas**: Adição, subtração, multiplicação e divisão.
- **Botões de controle**:
    - `C`: Limpa o display.
    - `←`: Apaga o último caractere.
    - `=`: Calcula o resultado da expressão.
- **Interface responsiva**: Adaptada para dispositivos móveis.

---

## Estrutura do Código

### `App.jsx`

Este arquivo contém o componente principal da calculadora. Ele utiliza o hook `useState` para gerenciar o estado do display.

#### Funções Principais

- **`calculateResult(expression)`**: Avalia a expressão matemática digitada no display, substituindo os operadores visuais (`÷` e `x`) pelos operadores válidos do JavaScript (`/` e `*`).
- **`handleClick(value)`**: Gerencia os cliques nos botões da calculadora, atualizando o display ou calculando o resultado.

#### Estrutura dos Botões

Os botões são organizados em uma matriz bidimensional para facilitar a renderização em linhas.

### `main.jsx`

Este arquivo é o ponto de entrada da aplicação. Ele utiliza o `ReactDOM.createRoot` para renderizar o componente `App` dentro do elemento com o ID `root`.

### `App.css`

Define os estilos da calculadora, incluindo:

- Layout centralizado.
- Estilo do display e dos botões.
- Responsividade para telas menores.

---

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Gera a versão de produção do projeto.
- **`npm run preview`**: Visualiza a versão de produção gerada.

---

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface.
- **Vite**: Ferramenta de build rápida para desenvolvimento.
- **CSS**: Para estilização da interface.

---

## Melhorias Futuras

- Adicionar suporte a teclas do teclado.
- Implementar mais operações matemáticas (exemplo: porcentagem, raiz quadrada).
- Melhorar a validação de expressões matemáticas.


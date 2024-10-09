
# Projeto React com Vite

Este projeto demonstra como configurar um projeto React usando o Vite como bundler, além de explicar alguns dos conceitos mais usados no React, como **Componentes**, **Props**, **Children**, **useState**, **useEffect**, **Context API** e **React Router DOM**.

## Instalação

1. **Pré-requisitos**:
   - Node.js instalado (v12+)
   - NPM ou Yarn

2. **Iniciando o projeto com Vite**:
   
   Primeiro, crie seu projeto React com Vite:

   ```bash
   npm create vite@latest meu-projeto-react
   ```

   Selecione o template `React` quando solicitado.

3. **Instale as dependências**:

   Dentro da pasta do seu projeto:

   ```bash
   cd meu-projeto-react
   npm install
   ```

4. **Executar o projeto**:

   Inicie o servidor de desenvolvimento com o seguinte comando:

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:5173`.

## Estrutura de Componentes

Em React, **componentes** são as partes reutilizáveis da UI. Eles podem ser funções ou classes, mas aqui vamos usar **componentes funcionais**.

### Exemplo de um Componente Simples

```jsx
// src/components/MeuComponente.jsx
import React from 'react';

function MeuComponente() {
  return <div>Olá, sou um componente!</div>;
}

export default MeuComponente;
```

### Props

**Props** são usadas para passar dados de um componente pai para um componente filho.

```jsx
// src/App.jsx
import React from 'react';
import MeuComponente from './components/MeuComponente';

function App() {
  const mensagem = 'Olá do App!';

  return <MeuComponente texto={mensagem} />;
}

// src/components/MeuComponente.jsx
function MeuComponente({ texto }) {
  return <div>{texto}</div>;
}

export default MeuComponente;
```

### Children

**Children** é uma prop especial que permite passar elementos JSX entre as tags de abertura e fechamento de um componente.

```jsx
// src/components/Layout.jsx
function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

export default Layout;

// src/App.jsx
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <h1>Conteúdo dentro do Layout</h1>
    </Layout>
  );
}
```

## Hooks

### useState

O `useState` é um hook que permite adicionar estado em componentes funcionais.

```jsx
import React, { useState } from 'react';

function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>Clique aqui</button>
    </div>
  );
}

export default Contador;
```

### useEffect

O `useEffect` permite realizar efeitos colaterais, como chamadas de API, subscrições ou atualizações de DOM dentro de componentes.

```jsx
import React, { useState, useEffect } from 'react';

function DadosAPI() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch('https://api.exemplo.com/dados')
      .then((res) => res.json())
      .then((resultado) => setDados(resultado));
  }, []); // O array vazio [] indica que o efeito só roda uma vez, ao montar o componente

  return (
    <div>
      {dados ? <p>{JSON.stringify(dados)}</p> : <p>Carregando...</p>}
    </div>
  );
}

export default DadosAPI;
```

## Context API

A **Context API** permite compartilhar dados entre componentes sem a necessidade de passar props manualmente em cada nível.

### Exemplo de uso da Context API:

```jsx
// src/context/MeuContexto.jsx
import React, { createContext, useState } from 'react';

export const MeuContexto = createContext();

export function MeuProvider({ children }) {
  const [valor, setValor] = useState('Valor inicial');

  return (
    <MeuContexto.Provider value={{ valor, setValor }}>
      {children}
    </MeuContexto.Provider>
  );
}
```

### Consumindo o Contexto

```jsx
// src/components/ComponenteFilho.jsx
import React, { useContext } from 'react';
import { MeuContexto } from '../context/MeuContexto';

function ComponenteFilho() {
  const { valor, setValor } = useContext(MeuContexto);

  return (
    <div>
      <p>Valor do contexto: {valor}</p>
      <button onClick={() => setValor('Novo valor')}>Atualizar valor</button>
    </div>
  );
}

export default ComponenteFilho;
```

### Usando o Provider no App

```jsx
// src/App.jsx
import React from 'react';
import { MeuProvider } from './context/MeuContexto';
import ComponenteFilho from './components/ComponenteFilho';

function App() {
  return (
    <MeuProvider>
      <ComponenteFilho />
    </MeuProvider>
  );
}

export default App;
```

## React Router DOM

O **React Router DOM** permite adicionar rotas à sua aplicação React.

### Instalação

```bash
npm install react-router-dom
```

### Exemplo de Uso:

```jsx
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Criando Componentes de Página:

```jsx
// src/components/Home.jsx
import React from 'react';

function Home() {
  return <h1>Bem-vindo à Home!</h1>;
}

export default Home;

// src/components/Sobre.jsx
import React from 'react';

function Sobre() {
  return <h1>Sobre nós</h1>;
}

export default Sobre;
```

## Conclusão

Este projeto básico de React configurado com Vite serve como ponto de partida para explorar os conceitos principais da biblioteca, incluindo componentes, props, hooks, Context API e roteamento com o React Router DOM. Sinta-se à vontade para expandir o projeto com mais funcionalidades.

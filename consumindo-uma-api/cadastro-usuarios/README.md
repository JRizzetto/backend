# Frontend - Sistema de Login

Este é o frontend de um sistema de login simples, desenvolvido com React e Vite. Ele consome a API de backend para realizar o cadastro, listagem e remoção de usuários.

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) – Ferramenta para build e desenvolvimento frontend moderno
- [React](https://reactjs.org/) – Biblioteca JavaScript para interfaces de usuário
- [Axios](https://axios-http.com/) – Cliente HTTP para requisições à API
- React Hooks:
  - `useEffect` – Para executar ações ao montar o componente
  - `useState` – Para controlar o estado da lista de usuários
  - `useRef` – Para acessar os valores dos inputs

## Funcionalidades

- Cadastro de usuários
- Listagem de todos os usuários
- Remoção de usuários

## Estrutura de Pastas

```bash
.
├── assets/
│   └── trash.png           # Ícone de lixeira
├── services/
│   └── api.js              # Configuração do Axios
├── pages/
│   └── Home.jsx            # Página principal com o formulário
├── style.css               # Estilos da aplicação
├── main.jsx
└── README.md

Executando o Projeto
1. Instale as dependências:
npm install
2. Inicie o projeto em modo de desenvolvimento:
npm run dev
3. Acesse no navegador: http://localhost:5173 (ou a porta que o Vite exibir)

⚠️ Certifique-se de que o backend esteja rodando em http://localhost:3000 para que a comunicação funcione corretamente.

Exemplo de Cadastro
Preencha o formulário com:

Nome

Endereço

E-mail

Clique em Cadastrar para adicionar o usuário.

Observações
O projeto está em desenvolvimento e ainda não possui sistema de autenticação ou validação avançada de dados.

Requisições são feitas com Axios via o arquivo services/api.js.
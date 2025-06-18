# Backend - Sistema de Login

Este é o backend de um sistema de login simples, desenvolvido com Node.js, Express e Prisma ORM, utilizando MongoDB como banco de dados.

## Tecnologias Utilizadas

- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Funcionalidades

- Criar usuário (`POST /usuarios`)
- Listar usuários (`GET /usuarios`)
- Atualizar usuário (`PUT /usuarios/:id`)
- Deletar usuário (`DELETE /usuarios/:id`)
- Filtro opcional por `name`, `email` ou `address` na listagem

## Estrutura básica do projeto

```bash
.
├── generated/
│   └── prisma/     # Código gerado pelo Prisma
├── index.js        # Código principal do servidor
├── package.json
└── README.md

Requisitos
Node.js

MongoDB em execução

Dependências instaladas via npm install

Executando o Projeto
1. Instale as dependências:
npm install
2. Gere o cliente Prisma (caso necessário):
npx prisma generate
3. Inicie o servidor:
node index.js

O backend ficará disponível em: http://localhost:3000

Exemplo de Requisição POST /usuarios
{
  "email": "exemplo@email.com",
  "name": "João Silva",
  "address": "Rua Exemplo, 123"
}

Observações
A estrutura do banco de dados é gerenciada pelo Prisma.
A API é simples e não inclui autenticação nesta versão.


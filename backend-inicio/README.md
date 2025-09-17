Projeto Backend - API de Gerenciamento
Um projeto backend simples construído com Node.js, Fastify e PostgreSQL, hospedado no Render.

📋 Funcionalidades
✅ CRUD Completo - Create, Read, Update, Delete

✅ API RESTful - Endpoints bem definidos

✅ Banco de Dados PostgreSQL - Usando Neon Tech

✅ Hospedagem no Render - Deploy contínuo

✅ Fastify Framework - Performance otimizada

---------------------------------------------------------------------

🛠️ Tecnologias Utilizadas
Node.js - Ambiente de execução JavaScript

Fastify - Framework web rápido e low-overhead

PostgreSQL - Banco de dados relacional

Neon Tech - Plataforma de banco de dados serverless

Render - Plataforma de hospedagem e deploy

---------------------------------------------------------------------

📦 Estrutura do Projeto
backend/
├── src/
│   ├── server.js          # Servidor principal e rotas
│   ├── db.js              # Configuração do banco de dados
│   └── create-table.js    # Script de criação de tabelas
├── .env                   # Variáveis de ambiente (não versionado)
├── package.json
└── README.md

---------------------------------------------------------------------

🚀 Como Executar Localmente
Pré-requisitos
Node.js (versão 16 ou superior)

Conta no Neon Tech para o banco de dados

Conta no Render para hospedagem

Instalação
Clone o repositório:

bash
git clone <seu-repositorio>
cd backend/nome-do-projeto
Instale as dependências:

bash
npm install
Configure as variáveis de ambiente:

bash
cp .env.example .env
# Edite o .env com suas configurações do Neon
Crie as tabelas no banco de dados:

bash
node create-table.js
Inicie o servidor:

bash
npm start
# ou para desenvolvimento
npm run dev

---------------------------------------------------------------------

🌐 API Endpoints
Método	Endpoint	Descrição
GET	/videos	Lista todos os vídeos
POST	/videos	Cria um novo vídeo
PUT	/videos/:id	Atualiza um vídeo
DELETE	/videos/:id	Remove um vídeo
GET	/videos/:id	Busca um vídeo específico

---------------------------------------------------------------------

📊 Exemplo de Dados
{
  "id": "uuid-v4-identifier",
  "title": "Título do vídeo",
  "description": "Descrição do vídeo",
  "duration": 3600
}

---------------------------------------------------------------------

🔧 Variáveis de Ambiente
Crie um arquivo .env com as seguintes variáveis:

env
DATABASE_URL=postgresql://usuario:senha@host.neon.tech/banco?sslmode=require
PORT=3333
NODE_ENV=development

---------------------------------------------------------------------

🚀 Deploy no Render
Conecte seu repositório GitHub no Render

Configure as variáveis de ambiente no painel do Render

Defina o comando de build: npm install

Defina o comando de start: npm start

Deploy automático a cada push para a main

📝 Scripts Disponíveis
npm start - Inicia o servidor em produção

npm run dev - Inicia o servidor em modo desenvolvimento

node create-table.js - Cria as tabelas no banco de dados

🤝 Contribuição
Faça o fork do projeto

Crie uma branch para sua feature: git checkout -b feature/nova-feature

Commit suas mudanças: git commit -m 'Adiciona nova feature'

Push para a branch: git push origin feature/nova-feature

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🆘 Suporte
Se encontrar problemas ou tiver dúvidas:

Verifique se todas as variáveis de ambiente estão configuradas

Confirme se o banco de dados está acessível

Consulte a documentação do Fastify

Verifique a documentação do Neon Tech


Desenvolvido com ❤️ por Jefferson Rizzetto usando Node.js, Fastify e PostgreSQL.


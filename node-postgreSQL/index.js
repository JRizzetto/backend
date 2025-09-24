require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

// Configurar o ambiente para receber arquivos json (para a criação do post)
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "funcionando",
  });
});

// Criar uma rota para retornar 1 cliente
app.get("/clientes/:id", async (req, res) => {
  const cliente = await db.selectCustomer(req.params.id);
  res.json(cliente);
});

// Criar uma rota para listas nossos clientes
app.get("/clientes", async (req, res) => {
  const clientes = await db.selectCustomers();
  res.json(clientes);
});

// Inserir ou adicionar um cliente
app.post("/clientes", async (req, res) => {
  await db.insertCustomer(req.body);
  // O status de sucesso para cadastro é o 201
  res.sendStatus(201);
});

// Atualizar um cliente
app.patch("/clientes/:id", async (req, res) => {
  await db.updateCustomer(req.params.id, req.body);
  // O status de sucesso para atualizar é o 200
  res.sendStatus(200);
});

// Deleter um cliente
app.delete("/clientes/:id", async (req, res) => {
  await db.deleteCustomer(req.params.id);
  // O status de sucesso para excluir é o 204
  res.sendStatus(204);
});

app.listen(port);

console.log("Backend rodando");

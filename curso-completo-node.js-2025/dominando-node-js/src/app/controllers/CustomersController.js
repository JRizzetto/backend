class CustomersController {
  constructor() {
    this.customers = [
      { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
      { id: 2, name: "Google", site: "http://google.com" },
      { id: 3, name: "UOL", site: "http://uol.com.br" },
    ];
  }

  // Listagem dos customers
  index = (req, res) => {
    return res.json(this.customers);
  };

  // Recupera um Customer
  show = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const customer = this.customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;

    console.debug("GET :: /customers/:id", JSON.stringify(customer));

    return res.status(status).json(customer);
  };

  // Cria um novo Customer
  create = (req, res) => {
    const { name, site } = req.body;
    const id = this.customers[this.customers.length - 1].id + 1;

    const newCustomer = { id, name, site };
    this.customers.push(newCustomer);

    return res.status(201).json(newCustomer);
  };

  // Atualiza um novo Customer
  update = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, site } = req.body;

    const index = this.customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 400;

    if (index >= 0) {
      this.customers[index] = { id: parseInt(id, 10), name, site };
    }

    return res.status(status).json(this.customers[index]);
  };

  // Exclui um Customer
  destroy = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = this.customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 400;

    if (index >= 0) {
      this.customers.splice(index, 1);
    }

    return res.status(status).json();
  };
}

export default new CustomersController();

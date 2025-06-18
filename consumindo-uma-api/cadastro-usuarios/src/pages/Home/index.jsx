import "./style.css";
import Trash from "../../assets/trash.png";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAddress = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const getUserData = await api.get("/usuarios");
    setUsers(getUserData.data);
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      address: inputAddress.current.value,
      email: inputEmail.current.value,
    });

    inputName.current.value = "";
    inputAddress.current.value = "";
    inputEmail.current.value = "";
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);

    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuário</h1>
        <input name="nome" type="text" placeholder="Nome" ref={inputName} />
        <input
          name="endereço"
          type="text"
          placeholder="Endereço"
          ref={inputAddress}
        />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          ref={inputEmail}
        />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Endereço: <span>{user.address}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Trash} className="trash" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;

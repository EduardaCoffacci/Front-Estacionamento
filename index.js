import { cadastroComponente } from "./controller/cadastro.js";
import { FaturamentoComponente } from "./controller/faturamento.js";
import { listaClienteComponente } from "./controller/lista-Clientes.js";

const link = document.getElementById("link");

link.addEventListener("click", (event) => {
  event.preventDefault();
  const option = event.target.innerText;

  switch (option) {
    case "Cadastro":
      cadastroComponente();
      break;
    case "Clientes":
      listaClienteComponente();
      break;
    case "Checkin":
      window.location.href = "./checkin.html";
      break;
    case "Faturamento":
      FaturamentoComponente();
      break;
  }
});

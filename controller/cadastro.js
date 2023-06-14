import { postVeiculo } from "../service/index.js";
import { getCadastro } from "../view/index.js";

 export const cadastroComponente = () => {
  getCadastro();

  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const cadastroCliente = {
      owner: document.getElementById("nome").value,
      model: document.getElementById("modelo").value,
      type: document.getElementById("tipo").value,
      label: document.getElementById("placa").value,
      obervation: document.getElementById("observacoes").value,
    };

    postVeiculo(cadastroCliente);
  });
};

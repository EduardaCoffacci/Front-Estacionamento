import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const cadastroComponente = () => {
  view.getCadastro(); // função que vai renderizar todos os campos para o usuario preencher as informações do veiculo

  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const cadastroCliente = { // Objeto criado para pegar os valores digitados pelo usuario em cada campo.
      owner: document.getElementById("nome").value,
      model: document.getElementById("modelo").value,
      type: document.getElementById("tipo").value,
      label: document.getElementById("placa").value,
      obervation: document.getElementById("observacoes").value,
    };

    service.postVeiculo(cadastroCliente); // função de requisição do tipo POST responsável por enviar as informações do cliente para o banco de dados.
  });
};

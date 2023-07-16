import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const cadastroComponente = () => {
  const label = [];
  service.getVeiculo().then((dados) => {
    dados.forEach((element) => {
      if (element.label !== null) {
        label.push(element.label);
      }
    });
  });

  view.getCadastro(); // função que vai renderizar todos os campos para o usuario preencher as informações do veiculo

  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const cadastroCliente = {
      // Objeto criado para pegar os valores digitados pelo usuario em cada campo.
      owner: document.getElementById("nome").value,
      model: document.getElementById("modelo").value,
      type: document.getElementById("tipo").value,
      label: document.getElementById("placa").value,
      obervation: document.getElementById("observacoes").value,
    };
    if (label.includes(cadastroCliente.label)) {
      return alert(`Essa placa : ${cadastroCliente.label} já existe no banco`);
    } else {
      service.postVeiculo(cadastroCliente); // função de requisição do tipo POST responsável por enviar as informações do cliente para o banco de dados.
    }
    window.location.reload();
  });
};

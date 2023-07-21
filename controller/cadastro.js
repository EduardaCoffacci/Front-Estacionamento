import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const cadastroComponente = () => {
  view.getSpinner();
  setTimeout(() => {
    const label = [];
    service.getVeiculo().then((dados) => {
      dados.forEach((element) => {
        if (element.label != null) {
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
        observation: document.getElementById("observacoes").value,
      };
      if (label.includes(cadastroCliente.label)) {
        return alert(
          `Essa placa : ${cadastroCliente.label} já existe no banco`
        );
      } else {
        formulario.reset()
        service.postVeiculo(cadastroCliente); // função de requisição do tipo POST responsável por enviar as informações do cliente para o banco de dados.
      }
    });
    const cancelar = document.getElementById("cancelar");
    cancelar.addEventListener("click", (event) => {
      event.preventDefault();
      formulario.reset();
    });
  }, 600)
};

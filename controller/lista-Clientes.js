import { service } from "../service/index.js";
import { view } from "../view/index.js";
import { AtualizaComponent } from "./atualiza.js";
import { cadastroComponente} from "./cadastro.js";
export const listaClienteComponente = () => {

  view.getSpinner();
  setTimeout(()=> {
    view.getListaClientesHtml();

  service.getVeiculo().then((dados) => {
    dados.forEach((element) => {
      if (element.owner !== null && element.label !== null) {
        criarNovaLinha(
          element.owner,
          element.model,
          element.label,
          element.type,
          element.observation,
          element.id
        );
      }
    });
  });
  const table = document.getElementById("tbody");
  table.addEventListener("click", (event) => {
    const button = event.target.innerText;
    const id = event.target.id;
    if (button === "Editar") {
      AtualizaComponent(id);
    }
    if (button === "Excluir") {
      deletar(id);
    }
    if (button === "Novo") {
      cadastroComponente()
    }
  });
},600)
};

const criarNovaLinha = (cliente, modelo, placa, tipo, observacoes, id) => {
  const table = document.getElementById("tbody");
  const novaLinha = document.createElement("tr");
  const dadosHtml = `
      <td class="none">${cliente}</td>
      <td>${modelo}</td>
      <td>${placa}</td>
      <td class="none">${tipo}</td>
      <td class="none">${observacoes}</td>
      <td>
        <div class="lista-btn">
          <a id="${id}" class="class="lista-cliente__table__button"">Editar<a/>
          <a id="${id}" class="class="lista-cliente__table__button">Excluir<a/>
        </div>
      </td>


    `;
  novaLinha.innerHTML = dadosHtml;
  return table.appendChild(novaLinha);
};

const deletar = (id) => {
  service.deletaVeiculo(id).then(() => {
    listaClienteComponente();
  });
};

import { service } from "../service/index.js";
import { view } from "../view/index.js";

view.getCheckinHtml();

let idChekin = [];

service.getActivities().then((dados) => {
  dados.forEach((element) => {
    if (element !== null) {
      idChekin.push(element.vehicle_id);
    }
  });
  getVeiculo();
});
let arrayVeiculos = [];

const getVeiculo = () => {
  service.getVeiculo().then((dados) => {
    dados.forEach((element) => {
      if (idChekin.includes(element.id)) {
        criarNovaLinha(element);
      }
      if (element !== null) {
        arrayVeiculos.push(element);
      }
    });
    criarOpcoes(arrayVeiculos);
  });
};

const criarNovaLinha = (object) => {
  const table = document.getElementById("tbody");
  const novaLinha = document.createElement("tr");
  const dadosHtml = `
        
            <td>${object.model}</td>
            <td>${object.label}</td>
      
            <td>
                <a id="${object.id}" class="btn-link editar">Checkout<a/>
            </td>
      
      
          `;
  novaLinha.innerHTML = dadosHtml;
  return table.appendChild(novaLinha);
};

const criarOpcoes = () => {
  const veiculosFiltrados = [];
  arrayVeiculos.forEach((element) => {
    idChekin.includes(element.id)
      ? console.log("Ja está estacionado")
      : console.log("Não está");
  });
};

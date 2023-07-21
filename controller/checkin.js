import { service } from "../service/index.js";
import { view } from "../view/index.js";
import { cadastroComponente } from "./cadastro.js";
import { checkoutComponent } from "./checkout.js";

view.getSpinner();
setTimeout(() => {
  view.getCheckinHtml();
  let idCheckin = [];

  service.getActivities().then((dados) => {
    dados.forEach((element) => {
      if (element.checkout_at == null) {
        idCheckin.push(element.vehicle_id);
      }
    });
    getVeiculo();
  });
  let arrayVeiculos = [];

  const getVeiculo = () => {
    service.getVeiculo().then((dados) => {
      dados.forEach((element) => {
        if (idCheckin.includes(element.id)) {
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
                <a id="${object.id}" class="checkin__table__item"">Checkout<a/>
            </td>     
      
          `;
    novaLinha.innerHTML = dadosHtml;
    return table.appendChild(novaLinha);
  };

  const criarOpcoes = (arrayVeiculos) => {
    const veiculosFiltrados = [];
    arrayVeiculos.forEach((element) => {
      idCheckin.includes(element.id)
        ? console.log("Ja está estacionado")
        : veiculosFiltrados.push(element);
    });
    const select = document.getElementById("select");
    veiculosFiltrados.forEach((element) => {
      const option = new Option(element.label, element.id);
      select.add(option);
    });
  };

  const main = document.getElementById("root");
  main.addEventListener("click", (event) => {
    const button = event.target.innerText;
    const id = event.target.id;
    if (button === "Checkout") {
      checkoutComponent(id);
    }
    if (button === "Checkin") {
      const select = document.getElementById("select");
      searchID(select.value);
    }
    if (button === "Adicionar Novo") {
      cadastroComponente();
    }
  });

  const searchID = (id) => {
    service.getVeiculo().then((dados) => {
      dados.forEach((element) => {
        if (element.id == id) {
          checkinApi(element);
        }
      });
    });
  };

  const checkinApi = (objeto) => {
    service.postCheckin(objeto.label).then((dados) => {
      alert(dados.message);
      window.location.reload();
    });
  };
}, 600);

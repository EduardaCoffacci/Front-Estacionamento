import { service } from "../service/index.js";
import { view } from "../view/index.js";

export const FaturamentoComponente = () => {
  view.getFaturamentoHtml();
  let objetoFaturamento = [];
  service.getActivities().then((dados) => {
    dados.forEach((element) => {
      if (element.price !== null) {
        objetoFaturamento.push(element);
      }
    });
    gerarObjetosDatas();
    gerarFaturamento();
  });
  let datasFiltradas = [];

  const gerarObjetosDatas = () => {
    const datasBrutas = [];
    objetoFaturamento.forEach((element) => {
      datasBrutas.push(dataConvert(element.checkout_at));
    });
    datasFiltradas = new Set(datasBrutas); // Vai percorrer as datas brutas e remover todas as duplicatas que existe.
    console.log(datasFiltradas);
  };

  const dataConvert = (tempo) => {
    const data = new Date(tempo).getDate();
    return data;
  };

  const gerarFaturamento = () => {
    let valor = {
      contador: 0,
      total: 0,
    };
    objetoFaturamento.forEach((element) => {
      if (typeof element.price == "number") {
        valor.contador++;
        valor.total += element.price;
      }
    });
    console.log(valor);
    criarNovalinha(valor);
    criarOpcoes(datasFiltradas);
  };
  const tabela = document.getElementById("tbody");
  const criarNovalinha = (valor) => {
    const linhaNovo = document.createElement("tr");
    const dadosHtml = `
  <td id='qtd'>${valor.contador}</td>
  <td id='total'>R$${valor.total.toFixed(2)}</td>
  <td><select id='datas'></select></td>
  `;

    linhaNovo.innerHTML = dadosHtml;
    renderGrafico()
    return tabela.appendChild(linhaNovo);
  };
  const criarOpcoes = (datas) => {
    const select = document.getElementById("datas");
    datas.forEach((element) => {
      const option = new Option(element, element);
      select.add(option);
    });
  };
  tabela.addEventListener("click", (event) => {
    if (event.target.id == "datas") {
      filtrarPorDatas(event);
    }
  });
  const filtrarPorDatas = (event) => {
    const dia = event.target.value;
    let valor = {
      contador: 0,
      total: 0,
    };

    objetoFaturamento.forEach((element) => {
      if (dataConvert(element.checkout_at) == dia) {
        valor.contador++;
        valor.total += element.price;
      }
    });
    
    AtualizarHtml(valor);
  };
  const AtualizarHtml = (valor) => {
    document.getElementById("qtd").innerText = valor.contador;
    document.getElementById("total").innerText = `R$ ${valor.total.toFixed(2)}`;
  };

  let PiechartArray = [['Dia', 'Faturamento']];
  const FiltrarFaturamentoPorDatas = (datas) => {
    let valor = {
      contador: 0,
      total: 0,
    }
    datas.forEach((elementDatas) => {
      valor.total = 0
      objetoFaturamento.forEach((element) => {
        if (dataConvert(element.checkout_at) == elementDatas) {
          valor.contador++;
          valor.total += element.price;
        }
      });
      PiechartArray.push([`${elementDatas}`, + valor.total.toFixed(2)])
    });
  };

  function renderGrafico() {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      FiltrarFaturamentoPorDatas(datasFiltradas);
      var data = google.visualization.arrayToDataTable(PiechartArray);

      var options = {
        is3D: true,
      };

      var chart = new google.visualization.PieChart(
        document.getElementById("piechart_3d")
      );
      chart.draw(data, options);
    }
  }
};

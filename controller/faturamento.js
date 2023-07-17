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
    datasFiltradas = new Set(datasBrutas);
    console.log(datasFiltradas);
  };

  const dataConvert = (tempo) => {
    const data = new Date(tempo).getDate();
    return data;
  }

  const gerarFaturamento = () => {
    let valor = {
      contador: 0,
      total: 0
    };
    objetoFaturamento.forEach((element) => {
      if(typeof element.price == "number"){
        valor.contador++
        valor.total += element.price
      }
    });
   console.log(valor)
  };
};



const getCadastro = () => {
  const main = document.getElementById("root");
  const dadosHtml = `<form id="formulario">
    <h1>Novo Cliente</h1>
    <label>Nome do Cliente</label>
    <input id="nome" type="text" placeholder="Digite o seu nome" />
    <br/> <br/>
    <label>Modelo</label>
    <input id="modelo" type="text" placeholder="Digite o modelo do veiculo" />
    <br/> <br/>
    <label>Tipo</label>
    <select id="tipo" type="text" placeholder="Digite o tipo do veiculo">
       <option value="1">Carro</option>
       <option value="0">Moto</option>
    </select>
  <br/> <br/>
  <label>Placa</label>
  <input id="placa" type="text" placeholder="Digite a placa do veiculo" />
  <br/> <br/>
  <label>Observações</label>
  <input id="observacoes" type="text" placeholder="Digite a observação:" />
  <br/> <br/>
  <div>
    <button id="cancelar" type="button">Cancelar</button>
    <button id="salvar" type="submit">Salvar</button>
  </div>
  </form>`;

  main.innerHTML = dadosHtml;
};

const getListaClientesHtml = () => {
  const main = document.getElementById("root");
  const dadosHtml = `<section>
  <h1>Lista de Clientes</h1>
    <table id="tbody">
    <tr>
      <th>Clientes</th>
      <th>Modelo</th>
      <th>Placa</th>
      <th>Tipo</th>
      <th>Observações</th>
      <th><a>Novo</a></th>
    <tr/>
    </table>
  </section>`;

  main.innerHTML = dadosHtml;
};

const getAtualizaCadastro = () => {
  const main = document.getElementById("root");
  const dadosHtml = `<form id="formulario">
    <h1>Editar Cliente</h1>
    <label>Nome do Cliente</label>
    <input id="nome" type="text" placeholder="Digite o seu nome" />
    <br/> <br/>
    <label>Modelo</label>
    <input id="modelo" type="text" placeholder="Digite o modelo do veiculo" />
    <br/> <br/>
    <label>Tipo</label>
    <select id="tipo" type="text" placeholder="Digite o tipo do veiculo">
       <option value="1">Carro</option>
       <option value="0">Moto</option>
    </select>
  <br/> <br/>
  <label>Placa</label>
  <input id="placa" type="text" placeholder="Digite a placa do veiculo" />
  <br/> <br/>
  <label>Observações</label>
  <input id="observacoes" type="text" placeholder="Digite a observação:" />
  <br/> <br/>
  <div>
    <button id="cancelar" type="button">Cancelar</button>
    <button id="salvar" type="submit">Atualizar</button>
  </div>
  </form>`;

  main.innerHTML = dadosHtml;
};

export const view = {
  getListaClientesHtml,
  getCadastro,
  getAtualizaCadastro
};

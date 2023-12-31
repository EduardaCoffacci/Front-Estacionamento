const url = "http://localhost:8000/api";

// ============= Requisição POSt===================

const postVeiculo = (objetoCliente) => {
  console.log("objetoCliente:", objetoCliente);
  return fetch(url + "/vehicles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objetoCliente),
  }).then((response) => {
    if (response.status !== 200) {
      console.log(`Erro no servidor:  ${response.status}`);
    } else {
      alert(`Sucesso ao salvar : ${response.status} `);
    }
  });
};
const postCheckin = (label) => {
  return fetch(url + "/activities/checkin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ label }),
  }).then((response) => {
    if (response.status !== 200) {
      console.log(`Erro no servidor:  ${response.status}`);
    } else {
      return response.json();
    }
  });
};

// ========================= Requisição GET==================

const getVeiculo = () => {
  return fetch(url + "/vehicles").then((response) => {
    if (response.status !== 200) {
      console.log(`Erro no servidor:  ${response.status}`);
    } else {
      return response.json();
    }
  });
};

const getActivities = () => {
  return fetch(url + "/activities").then((response) => {
    if (response.status !== 200) {
      console.log(`Erro no servidor:  ${response.status}`);
    } else {
      return response.json();
    }
  });
};

// ========================= Requisição PUT ==================
const putVeiculo = (objetoCliente, id) => {
  return fetch(`${url}/vehicles/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objetoCliente),
  }).then((response) => {
    if (response.status !== 200) {
      console.log(`Erro no servidor:  ${response.status}`);
    } else {
      return response.json();
    }
  });
};

const putCheckout = (objeto) => {
  return fetch(url + "/activities/checkout", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objeto),
  }).then((response) => {
    if (response.status !== 200) {
      console.log(`Erro no servidor:  ${response.status}`);
    } else {
      return response.json();
    }
  });
};
// ========================= Requisição DELETE ==================

const deletaVeiculo = (id) => {
  return fetch(`${url}/vehicles/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.status !== 200) {
      console.log(`Erro no servidor:  ${response.status}`);
    } else {
      return response.json();
    }
  });
};

// ==================== Export =============

export const service = {
  postVeiculo,
  getVeiculo,
  putVeiculo,
  deletaVeiculo,
  getActivities,
  postCheckin,
  putCheckout,
};

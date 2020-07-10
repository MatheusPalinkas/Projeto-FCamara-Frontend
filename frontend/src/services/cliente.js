import api from "./Api";

export async function criarCliente(formCliente) {
  try {
    const { data } = await api.post("/cliente", {
      ...formCliente,
    });
    return data;
  } catch (error) {
    alert(`Erro ao cadastrar cliente: ${error}`);
    return "";
  }
}

export async function atualizarCliente(formCliente) {
  try {
    const { data } = await api.put("/cliente", {
      ...formCliente,
    });
    return data;
  } catch (error) {
    alert(`Erro ao atualizar cliente: ${error}`);
    return "";
  }
}

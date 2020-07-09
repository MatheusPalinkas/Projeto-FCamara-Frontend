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

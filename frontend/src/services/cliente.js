import api from "./Api";

export async function criarCliente(formCliente) {
  try {
    const { data } = await api.post("/cliente", {
      ...formCliente,
    });
    return data;
  } catch (error) {
    alert(`Erro no upload da foto: ${error}`);
    return "";
  }
}

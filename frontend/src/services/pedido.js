import api from "./Api";

export async function criarPedido(formPedido) {
  try {
    const { data } = await api.post("/pedido", formPedido);
    return data;
  } catch (error) {
    alert(`Erro ao criar pedido: ${error}`);
    return "";
  }
}

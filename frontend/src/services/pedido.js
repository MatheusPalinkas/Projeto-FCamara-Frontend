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

export async function detalhesPedido(idPedido) {
  try {
    const { data } = await api.get(`/pedido/${idPedido}`);
    return data;
  } catch (error) {
    alert(`Erro ao listar pedidos do comercio: ${error}`);
    return [];
  }
}

export async function listarPedidosComercio(idComercio) {
  try {
    const { data } = await api.get(`/pedido/comercio/${idComercio}`);
    return data;
  } catch (error) {
    alert(`Erro ao listar pedidos do comercio: ${error}`);
    return [];
  }
}

export async function listarPedidosCliente(idCliente) {
  try {
    const { data } = await api.get(`/pedido/cliente/${idCliente}`);
    return data;
  } catch (error) {
    alert(`Erro ao listar pedidos do cliente: ${error}`);
    return [];
  }
}

export async function atualizarStatusPedido(idPedido, status) {
  try {
    await api.put(`/pedido/${idPedido}/${status}`);
  } catch (error) {
    alert(`Erro ao atualizar status do pedido: ${error}`);
  }
}

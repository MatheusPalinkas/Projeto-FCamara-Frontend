import api from "./Api";

export async function listarProdutosComercio(idComercio) {
  try {
    const { data } = await api.get(`/produto/comercio/${idComercio}`);
    return data;
  } catch (error) {
    alert(`Erro ao listar os produtos: ${error}`);
    return "";
  }
}

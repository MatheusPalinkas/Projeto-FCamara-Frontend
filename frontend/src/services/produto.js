import api from "./Api";

export async function criarProduto(formProduto) {
  try {
    const { data } = await api.post("/produto", { ...formProduto });
    return data;
  } catch (error) {
    alert(`Erro ao listar os produtos: ${error}`);
    return "";
  }
}

export async function updateProduto(formEstoque) {
  try {
    await api.put("/produto/estoque", {
      ...formEstoque,
    });
  } catch (error) {
    alert(`Erro ao listar os produtos: ${error}`);
    return "";
  }
}

export async function deleteProduto(id) {
  try {
    await api.delete(`/produto/${id}`, { id });
  } catch (error) {
    alert(`Erro ao listar os produtos: ${error}`);
    return "";
  }
}

export async function listarProdutosComercio(idComercio) {
  try {
    const { data } = await api.get(`/produto/comercio/${idComercio}`);
    return data;
  } catch (error) {
    alert(`Erro ao listar os produtos: ${error}`);
    return "";
  }
}

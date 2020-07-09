import api from "./Api";

export async function listarCategorias() {
  try {
    const { data } = await api.get("/categoria");
    return data;
  } catch (error) {
    alert(`Erro ao listar as categorias: ${error}`);
    return "";
  }
}

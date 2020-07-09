import api from "./Api";

export async function criarComercio(formComercio) {
  try {
    const { data } = await api.post(`/comercio`, { ...formComercio });
    return data;
  } catch (error) {
    alert(`Erro no upload da foto: ${error}`);
    return "";
  }
}

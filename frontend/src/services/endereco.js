import api from "./Api";

export async function criarEndereco(tipoUser, formEndereco) {
  try {
    const { data } = await api.post(`/endereco/${tipoUser}`, {
      ...formEndereco,
    });
    return data;
  } catch (error) {
    alert(`Erro no cadastro do endereco: ${error}`);
    return "";
  }
}

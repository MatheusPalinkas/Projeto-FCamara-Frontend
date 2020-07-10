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

export async function listarEnderecosCliente(idCliente) {
  try {
    const { data } = await api.get(`/endereco/cliente/${idCliente}`);

    return data;
  } catch (error) {
    alert(`Erro ao listar os endereços: ${error}`);
    return "";
  }
}
export async function getEndereco(idEndereco) {
  try {
    const { data } = await api.get(`/endereco/${idEndereco}`);
    return data;
  } catch (error) {
    alert(`Erro ao listar o endereço: ${error}`);
    return "";
  }
}

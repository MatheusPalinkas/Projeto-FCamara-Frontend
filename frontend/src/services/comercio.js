import api from "./Api";

export async function criarComercio(formComercio) {
  try {
    const { data } = await api.post(`/comercio`, { ...formComercio });
    return data;
  } catch (error) {
    alert(`Erro ao criar comercio: ${error}`);
    return "";
  }
}

export async function listarComercioID(id) {
  try {
    const { data } = await api.get(`/comercio/${id}`);
    return data;
  } catch (error) {
    alert(`Erro ao criar comercio: ${error}`);
    return "";
  }
}

export async function listarComercio(idCategoria, nomeFiltro, page) {
  try {
    let filtro = "";
    if (idCategoria) filtro = `&idCategoria=${idCategoria}&`;
    if (nomeFiltro) filtro = `&nome=${nomeFiltro}&`;

    const { data } = await api.get(`/comercio?page=${page}&size=10${filtro}`);
    return data;
  } catch (error) {
    alert(`Erro na listagem dos comercios: ${error}`);
    return "";
  }
}

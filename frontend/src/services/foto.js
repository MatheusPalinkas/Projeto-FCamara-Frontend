import api from "./Api";

export async function criarFoto(foto) {
  try {
    if (!!foto) {
      const data = new FormData();
      data.append("binario", foto);

      const res = await api.post(`/imagem`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      return `${res.config.baseURL}/imagem/${res.data.id}`;
    }
    return "";
  } catch (error) {
    alert(`Erro no upload da foto: ${error}`);
    return "";
  }
}

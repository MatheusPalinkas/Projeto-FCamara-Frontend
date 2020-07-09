import api from "./Api";

export async function criarVendedor(formVendedor) {
  try {
    const { data } = await api.post("/vendedor", {
      ...formVendedor,
    });
    return data;
  } catch (error) {
    alert(`Erro no upload da foto: ${error}`);
    return "";
  }
}

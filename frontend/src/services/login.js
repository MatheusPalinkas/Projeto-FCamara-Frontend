import api from "./Api";

export async function Logar(email, senha) {
  try {
    const resToken = await api.post("/login", { email, senha });
    const { token, tipo } = resToken.data;

    const { data } = await api.get("/usuario", {
      headers: {
        authorization: `${tipo} ${token}`,
      },
    });
    return data;
  } catch (error) {
    alert(`Erro no upload da foto: ${error}`);
    return "";
  }
}

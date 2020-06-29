const INICIAL_STATE = {};
const userFake = {
  /*comercio: {
    //idComercio: 2,
    nome: "Padaria da Ana",
    categoria: 1,
    cnpj: "1111111",
    possuiEntregas: false,
    pagamentoCartao: false,
    pagamentoDinheiro: false,
    pagamentoBoleto: true,
  },*/
  id: 2,
  nome: "Ana",
  dataNascimento: "13/08/1982",
  cpf: "33333333333",
  telefone: "13999552233",
  url:
    "https://static1.purepeople.com.br/articles/7/28/80/37/@/3267022-larissa-manoela-chamou-atencao-dos-segui-624x600-2.jpg",
};
export default function dataUser(state = userFake, action) {
  if (action.type === "SET_LOGIN_DATA") return { ...state, ...action.user };
  return state;
}

const INICIAL_STATE = {
  items: [
    {
      id: 1,
      idComercio: 1,
      nome: "Xaomi",
      preco: 200.5,
      descricao: "O melhor celular",
      quantidade: 8,
      url:
        "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    },
    {
      id: 2,
      nome: "Prancha de surf",
      preco: 2000.5,
      descricao: "A melhor prancha de surf",
      quantidade: 1,
      url:
        "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    },
  ],
  total: 9,
};

export default function dataUser(state = INICIAL_STATE, action) {
  //if (action.type === "ADD_ITEM_CARRINHO") return { ...state, ...action.user };
  return state;
}

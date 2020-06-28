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
  if (action.type === "REMOVE_ITEM_CART") {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.id),
      total:
        parseInt(state.total) -
        parseInt(state.items.find((item) => item.id === action.id).quantidade),
    };
  }

  if (action.type === "UPDATE_QUANTIDADE_ITEM_CART") {
    const { id, quantidade } = action;
    const { items } = state;
    const itemExists = items.find((item) => item.id === id);

    if (itemExists) {
      const itemIndex = items.findIndex((item) => item.id === itemExists.id);

      if (itemIndex >= 0 && quantidade >= 0) {
        items[itemIndex].quantidade = Number(quantidade);
        const total = items
          .map((item) => item.quantidade)
          .reduce((acumulador, atual) => acumulador + atual);

        state.total = total;
        state.items = items;
      }
    }
  }
  if (action.type === "ADD_ITEM_CART") {
    return {
      ...state,
      items: [...state.items, action.item],
      quantidade: state.quantidade + 1,
    };
  }
  return state;
}

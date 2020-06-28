const INICIAL_STATE = {
  items: [],
  total: 0,
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

        return {
          ...state,
          items: items,
          total: total,
        };
      }
    }
  }
  if (action.type === "ADD_ITEM_CART") {
    const { item } = action;
    const { id } = item;
    const { items } = state;
    const itemExists = items.find((item) => item.id === id);

    if (itemExists) {
      const itemIndex = items.findIndex((item) => item.id === itemExists.id);
      items[itemIndex].quantidade = Number(items[itemIndex].quantidade + 1);
      const total = items
        .map((item) => item.quantidade)
        .reduce((acumulador, atual) => acumulador + atual);

      return {
        ...state,
        items: items,
        total: total,
      };
    } else {
      return {
        ...state,
        items: [...state.items, item],
        total: state.total + 1,
      };
    }
  }
  return state;
}

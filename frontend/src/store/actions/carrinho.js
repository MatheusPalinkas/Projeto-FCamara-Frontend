export function REMOVE_ITEM_CART(id) {
  return {
    type: "REMOVE_ITEM_CART",
    id,
  };
}

export function ADD_ITEM_CART(id, item) {
  return {
    type: "ADD_ITEM_CART",
    item,
  };
}

export function UPDATE_QUANTIDADE_ITEM_CART(id, quantidade) {
  return {
    type: "UPDATE_QUANTIDADE_ITEM_CART",
    id,
    quantidade,
  };
}

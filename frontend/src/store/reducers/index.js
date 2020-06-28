import { combineReducers } from "redux";

import carrinho from "./carrinho";
import user from "./user";

export default combineReducers({
  user,
  carrinho,
});

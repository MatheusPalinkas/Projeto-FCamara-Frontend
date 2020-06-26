const INICIAL_STATE = {};

export default function dataUser(state = INICIAL_STATE, action) {
  if (action.type === "SET_LOGIN_DATA") return { ...state, ...action.user };
  return state;
}

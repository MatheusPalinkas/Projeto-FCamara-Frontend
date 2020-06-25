export function HANDLE_LOGIN(user) {
  return {
    type: "SET_LOGIN_DATA",
    user,
  };
}

export const verifyToken = () => {
  const token = localStorage.getItem("app-token");
  return !token ? false : true;
};
export const adminVerifyToken = () => {
  const token = localStorage.getItem("admin-app-token");
  return !token ? false : true;
};

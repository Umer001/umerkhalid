export const verifyToken = () => {
  const token = localStorage.getItem("app-token");
  return !token ? false : true;
};

export const errorHandler = (err) => {
  console.error(err);
  const serverResponseElement = document.getElementById("server-response");
  serverResponseElement.textContent = err;
  throw err;
};

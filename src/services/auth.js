export const TOKEN_KEY = "@airbnb-Token";
export const TYPE_KEY = "@type-user";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

//Obtem a key para o token
export const getToken = () => localStorage.getItem(TOKEN_KEY);

//Obtem a key para o usuario principal
export const getUserType = () => localStorage.getItem(TYPE_KEY);

//Captura o usuario principal  user ou admin
export const setUserType = isAdmin => {
  const type = isAdmin ? 'admin' : 'user'
  localStorage.setItem(TYPE_KEY, type)
}

//Captura o access_token
export const login = token => {
  console.log("access_token: ", token)
  localStorage.setItem(TOKEN_KEY, token); 
};

//Remove o token e o usuario principal através do TOKEN_KEY e do TYPE_KEY
export const logout = () => {  
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TYPE_KEY);
  console.log("access_token removido")
};

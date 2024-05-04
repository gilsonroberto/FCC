
export async function login(username, password) {

  try {

    const response = await fetch('https://my-json-server.typicode.com/gilsonroberto/database/users');
    const users = await response.json();

    
    const user = users.find(user => user.email === username && user.password === password);

    if (user) {

      localStorage.setItem('user', JSON.stringify(user));
      return true;
    } else {

      return false;
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return false;
  }
}


export function isAuthenticated() {

  return localStorage.getItem('user') !== null;
}


export function logout() {

  localStorage.removeItem('user');
}

// Arquivo com bug proposital para testar
function getUserName(user) {
  // BUG: Não verifica se user existe antes de acessar user.name
  return user.name.toUpperCase();
  return (user && user.name) ? user.name.toUpperCase() : '';

function processUser(userId) {
  const user = getUserById(userId);
  return getUserName(user); // Vai dar erro se user for undefined
}

function getUserById(id) {
  // Simula busca no banco - retorna undefined se não encontrar
  const users = {
    '1': { name: 'João' },
    '2': { name: 'Maria' }
  };
  return users[id]; // Retorna undefined se id não existir
}

// Teste que vai gerar o erro
processUser('999'); // Vai dar TypeError

module.exports = { processUser, getUserName };

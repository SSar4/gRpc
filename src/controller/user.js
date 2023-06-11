
function create(call, callback) {

    // Implemente a lógica para criar um usuário
    // Aqui você pode validar os dados recebidos, armazenar em um banco de dados, etc.
    // Depois, você pode construir a resposta e passá-la para o callback

    const message = call.request;
    callback(null, {...message, id: 1});
  }
  
function find(call, callback) {

    // Implemente a lógica para criar um usuário
    // Aqui você pode validar os dados recebidos, armazenar em um banco de dados, etc.
    // Depois, você pode construir a resposta e passá-la para o callback

    const response = {
        id: 1,
        name: 'sara',
        email: 'aras.strong8@gmail.com'
    };

    callback(null, response);
}

module.exports = {
    create,
    find
}
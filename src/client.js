const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./proto/user.proto');
const { userpackage } = grpc.loadPackageDefinition(packageDefinition);

const client = new userpackage.UserService('localhost:50051', grpc.credentials.createInsecure());

function create(message) {
  const request = { 
    name: message.name,
    email: message.email,
    password: message.password
};
  client.Create(request, (error, response) => {
    if (error) {
      console.error('Erro ao enviar mensagem:', error);
      return;
    }
    console.log('Resposta do create:', response);
  });
}

function find(message) {
  const request = { 
    id: message
};
  client.Find(request, (error, response) => {
    if (error) {
      console.error('Erro ao enviar mensagem:', error);
      return;
    }
    console.log('Resposta do find:', response);
  });
}

// Exemplo de chamada de função
create({name: 'sara', email: 'aras.strong8@gmail.com', password: '12345'});
find(1);
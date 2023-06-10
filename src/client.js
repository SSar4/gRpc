const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./proto/service.proto');
const { mypackage } = grpc.loadPackageDefinition(packageDefinition);

const client = new mypackage.MyService('localhost:50051', grpc.credentials.createInsecure());

function sendMessage(message) {
  const request = { content: message };
  client.SendMessage(request, (error, response) => {
    if (error) {
      console.error('Erro ao enviar mensagem:', error);
      return;
    }
    console.log('Resposta:', response.content);
  });
}

// Exemplo de chamada de função
sendMessage('Olá, mundo!');

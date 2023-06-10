const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('./proto/service.proto');
const { mypackage } = grpc.loadPackageDefinition(packageDefinition);

function sendMessage(call, callback) {
  const message = call.request;
  const response = { content: ` ${message.content}` };
  callback(null, response);
}

function main() {
  const server = new grpc.Server();
  server.addService(mypackage.MyService.service, { SendMessage: sendMessage });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error('Erro ao vincular o servidor:', error);
      return;
    }
    console.log(`Servidor gRPC iniciado na porta ${port}`);
    server.start();
  });
}

main();

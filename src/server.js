const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { create, find } = require('./controller/user');

const packageDefinition = protoLoader.loadSync('./proto/user.proto');
const { userpackage } = grpc.loadPackageDefinition(packageDefinition);

function main() {
  const server = new grpc.Server();
  server.addService(userpackage.UserService.service, {
    Create: create,
    Find: find
  });
  
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

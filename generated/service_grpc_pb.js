// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var service_pb = require('./service_pb.js');

function serialize_mypackage_MyMessage(arg) {
  if (!(arg instanceof service_pb.MyMessage)) {
    throw new Error('Expected argument of type mypackage.MyMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mypackage_MyMessage(buffer_arg) {
  return service_pb.MyMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


// Definindo o serviço
var MyServiceService = exports.MyServiceService = {
  // Método para enviar uma mensagem
sendMessage: {
    path: '/mypackage.MyService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.MyMessage,
    responseType: service_pb.MyMessage,
    requestSerialize: serialize_mypackage_MyMessage,
    requestDeserialize: deserialize_mypackage_MyMessage,
    responseSerialize: serialize_mypackage_MyMessage,
    responseDeserialize: deserialize_mypackage_MyMessage,
  },
};

exports.MyServiceClient = grpc.makeGenericClientConstructor(MyServiceService);

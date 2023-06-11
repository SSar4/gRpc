# Projeto gRPC com Node.js

Este é um projeto de exemplo que demonstra como usar gRPC com Node.js. O projeto consiste em um servidor gRPC e um cliente gRPC que se comunicam usando um arquivo .proto definindo mensagens e serviços.

## Pré-requisitos

- Node.js (versão X.X.X)
- npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone este repositório para o seu ambiente local:

```bash git clone https://github.com/seu-usuario/projeto-grpc-node.git````

Acesse o diretório do projeto:

1. Copy code cd projeto-grpc-node

2. Instale as dependências do projeto: npm install

## Uso
Executando o servidor
No diretório raiz do projeto, execute o seguinte comando para iniciar o servidor gRPC:

```node src/server.js```
O servidor será iniciado e estará ouvindo na porta 50051.

Executando o cliente

Em outro terminal, no diretório raiz do projeto, execute o seguinte comando para enviar uma mensagem para o servidor:

node src/client.js

O cliente enviará uma mensagem para o servidor e exibirá a resposta recebida.

## Personalização


Você pode personalizar o projeto de acordo com suas necessidades:

No arquivo proto/service.proto, defina suas próprias mensagens e serviços gRPC.

No arquivo src/server.js, implemente a lógica do servidor para lidar com as solicitações dos clientes.

No arquivo src/client.js, atualize a lógica do cliente para enviar as solicitações desejadas ao servidor.


No projeto gRPC em Node.js, não é necessário compilar explicitamente o arquivo .proto para gerar os arquivos de código. O pacote @grpc/proto-loader usado no exemplo anterior já faz o carregamento dinâmico do arquivo .proto e gera as definições de serviço e mensagem em tempo de execução.

Deixei um arquivo do insomnia caso quera usa-lo como client
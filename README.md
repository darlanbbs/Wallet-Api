# Wallet-API Back-End

Este é o back-end da aplicação Wallet-APP, responsável por fornecer a lógica de negócios e gerenciar a comunicação com o banco de dados MongoDB. O aplicativo utiliza diversas bibliotecas para garantir a segurança, autenticação e manipulação dos dados.

## Funcionalidades Principais

- Autenticação de usuários utilizando JWT (JSON Web Tokens).
- Armazenamento seguro de senhas com a biblioteca bcrypt.
- Validação de entrada de dados utilizando a biblioteca Joi.
- Integração com o banco de dados MongoDB para armazenamento de informações de conta.

## Tecnologias Utilizadas

- bcrypt: Biblioteca para hash e verificação segura de senhas.
- dotenv: Carregamento de variáveis de ambiente a partir de um arquivo `.env`.
- express: Framework para criação de APIs em Node.js.
- joi: Biblioteca para validação de dados.
- jsonwebtoken: Biblioteca para geração e validação de JSON Web Tokens (JWT).
- mongoose: Biblioteca para modelagem de objetos do MongoDB.
- nodemon: Utilitário para reiniciar automaticamente o servidor durante o desenvolvimento.

## Pré-requisitos

Certifique-se de ter [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação

1. Clone este repositório.
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `npm install` para instalar as dependências.

## Configuração

1. Crie um arquivo `.env` na raiz do projeto para armazenar as variáveis de ambiente sensíveis.
2. Configure as variáveis necessárias no arquivo `.env`. Por exemplo:

PORT=5000<br>
MONGO_URI=link_do_seu_cluster<br>
SECRET_KEY=seu_segredo_para_jwt


## Execução

1. Após a instalação das dependências, execute o comando `npm start` para iniciar o servidor.
2. O servidor estará disponível em `http://localhost:5000` (ou a porta que você definiu).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.


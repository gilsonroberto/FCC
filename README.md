# 💻 Tecnologias utilizadas:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

---
[![](https://visitcount.itsvg.in/api?id=gilsonroberto&icon=0&color=0)](https://visitcount.itsvg.in)

## Teste Para Desenvolvedor Front End 

Este projeto consiste em um teste front-end destinado aos interessados em uma vaga de Front End. O teste será dividido em três etapas:

1. **Criar projeto com Vue.js:**
   - Utilizar o Vue.js e Store para armazenamento de dados.
   - Não utilizar Framework CSS (Bootstrap, Tailwind, Bulma, PureCSS, etc.)

2. **Tela de Login:**
   - Criar uma tela de login com:
     - Dois inputs para o usuário e senha.
     - Utilização de Mock Online Fake ou Arquivo JSON dentro do Projeto.
     - Validar usuário e senha.
   - Redirecionar para a página de clientes após o login.

3. **Crud de Clientes:**
   - Criar um CRUD de clientes com as seguintes funcionalidades:
     - Consumir uma API no swagger de testes fornecido.
     - Atualização, inclusão, e exclusão de clientes.
     - Apresentar a lista de clientes em uma tabela, com opção de filtrar pelo nome e CPF.
     - Validar campos como CPF e data de nascimento.
     - Fazer a comunicação com a base de dados através do consumo das APIs (Axios).

## Visão Geral do Projeto:

### Página de Login:
- Caixa de login centralizada com inputs para usuário e senha.
- Validação de usuário e senha.
- Redirecionamento para a página de clientes após o login.

### Página do Cliente:
- Cabeçalho, Menu e Rodapé.
- Funcionalidades de atualização, inclusão, e exclusão de clientes.
- Lista de clientes em uma tabela com opção de filtragem.
- Validação de campos como CPF e data de nascimento.
- Comunicação com a base de dados através do consumo das APIs.

### Documentação:
- Swagger: [Link para o Swagger](https://extranet.fcc.org.br/webapi/testecandidato/swagger/index.html)

### Objetivo:
O objetivo do projeto é permitir o cadastro de clientes, preenchendo dados básicos e de endereço conforme especificado abaixo:

#### Cliente:
- CPF (String)
- Nome (String)
- RG (String)
- Data Expedição (Datetime)
- Órgão Expedição (String)
- UF (String)
- Data de nascimento (Datetime)
- Sexo (String)
- Estado Civil (String)

#### Endereço Cliente:
- CEP (String)
- Logradouro (String)
- Número (String)
- Complemento (String)
- Bairro (String)
- Cidade (String)
- UF (String)

## Configuração do Projeto

Para configurar o projeto, siga os passos abaixo:

1. Clone este repositório para o seu ambiente local:
```
git clone https://github.com/gilsonroberto/FCC.git
```

2. Navegue até o diretório do projeto clonado usando o terminal:
```
cd FCC
```

3. Execute o seguinte comando para instalar as dependências do projeto:
```
yarn install
```

## Compilação e Recarregamento Automático para Desenvolvimento

Para compilar e recarregar automaticamente o projeto durante o desenvolvimento, execute o seguinte comando:

```
yarn serve
```

## Compilação e Minificação para Produção

Para compilar e minificar o projeto para produção, utilize o seguinte comando:
```
yarn build
```

## Lint e Correção de Arquivos

Para realizar a análise de lint e correção de arquivos, utilize o seguinte comando:
```
yarn lint
```

### Observação:

Para logar no projeto, utilize as seguintes credenciais:
```
https://my-json-server.typicode.com/gilsonroberto/database/db
```

```json
{
"users": [
 { "id": 1, "name": "Ademilson Souza", "password": "[4YH&;7h", "email": "ademilson@ademilson.com" },
 { "id": 2, "name": "Maria Joaquina", "password": "XrI7]zei", "email": "maria@maria.com" },
 { "id": 3, "name": "João Alves", "password": "5oTQA3.1", "email": "joao@joao.com" },
 { "id": 4, "name": "Vinicius Souza", "password": "K@+%*dW4", "email": "vinicius@vinicius.com" }
]
}


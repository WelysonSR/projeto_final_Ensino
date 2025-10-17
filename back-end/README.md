# 🎮 Catálogo de Jogos - Back-end
## 📘 Descrição
 
O sistema tem como objetivo **gerenciar o catálogo de jogos de um usuário**, permitindo o controle de usuários, jogos e plataformas.

---

## 🧩 Funcionalidades

- 👤 Cadastro e login de usuários  
- 🎮 CRUD completo de jogos  
- 🕹️ CRUD de plataformas (Steam, PSN, Epic Games etc.)  
- 🏷️ Categorias de jogo: jogando, jogado, zerado, não recomendo, entre outros  
- ⭐ Atribuição de notas aos jogos  
- 🔗 Associação entre jogos e plataformas  
- 💾 Criação automática do banco de dados e inserção de registros iniciais  
- 🔒 Autenticação com JWT  
- ⚙️ API RESTful organizada em camadas (Controller, Service, Model e Router)

---

## 🏗️ Estrutura do Projeto

```
.
|__.env
|__.gitignore
|__package.json
|__yarn.lock
|__src
|  |__api
|  |   |__app.js
|  |   |__server.js
|  |
|  |__controller
|  |   |__game.js
|  |   |__platform.js
|  |   |__user.js
|  |
|  |__middleware
|  |   |__auth.js
|  |   |__error.js
|  |
|  |__models
|  |   |__connection.js
|  |   |__createDb.js
|  |   |__game.js
|  |   |__platform.js
|  |   |__user.js
|  |
|  |__router
|  |   |__game.js
|  |   |__platform.js
|  |   |__user.js
|  |
|  |__service
|  |   |__game.js
|  |   |__platform.js
|  |   |__user.js
|  |
|  |__util
|  |   |__generatejwt.js
```

---

## ⚙️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **SQLite** (banco de dados relacional)
- **JWT (JSON Web Token)** — autenticação
- **Dotenv** — configuração de ambiente

---

## 🗃️ Banco de Dados

O banco de dados é **relacional (SQLite)** e é criado automaticamente na inicialização do servidor.  
O script `createDb.js` é responsável por:

- Criar as tabelas `users`, `games` e `platforms`, caso não existam;
- Inserir **10 registros iniciais** de cada tipo de objeto.

---

## 🚀 Como Executar o Projeto

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) ou npm

---

### 2️⃣ Clonar o Repositório

```bash
git clone git@github.com:WelysonSR/projeto_final_Ensino.git
cd ./back-end
```

---

### 3️⃣ Configurar Variáveis de Ambiente

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=123456
MYSQL_DB_NAME=dev_games
```

---

### 4️⃣ Instalar Dependências

```bash
yarn install
# ou
npm install
```

---

### 5️⃣ Executar o Servidor

```bash
yarn start
# ou
npm start
```

O servidor será iniciado em:  
👉 **http://localhost:3000**

---

## 📡 Rotas Principais da API

### 👤 Usuário
| Método | Rota | Descrição |
|--------|------|------------|
| POST | `/user/register` | Cadastrar novo usuário |
| POST | `/user/login` | Login e geração de token JWT |
| GET | `/user` | Listar usuários (rota protegida) |

### 🎮 Jogos
| Método | Rota | Descrição |
|--------|------|------------|
| GET | `/game` | Listar todos os jogos |
| POST | `/game` | Criar novo jogo |
| PUT | `/game/:id` | Atualizar jogo |
| DELETE | `/game/:id` | Excluir jogo |

### 🕹️ Plataformas
| Método | Rota | Descrição |
|--------|------|------------|
| GET | `/platform` | Listar plataformas |
| POST | `/platform` | Criar nova plataforma |
| PUT | `/platform/:id` | Atualizar plataforma |
| DELETE | `/platform/:id` | Excluir plataforma |

---

## 🧠 Usabilidade e Estrutura

O projeto segue princípios de **usabilidade e organização de código**, como:
- Feedback claro em respostas da API  
- Estrutura modular e de fácil manutenção  
- Tratamento centralizado de erros  
- Middleware para autenticação e controle de acesso  

---

## 🧪 Dados Iniciais

Ao executar o servidor pela primeira vez, o script `createDb.js`:
- Gera as tabelas necessárias;  
- Insere automaticamente **10 registros de exemplo** para cada entidade (usuário, jogo e plataforma).

---

## 📄 Licença

Este projeto é de **uso educacional** e pode ser reutilizado livremente para fins de aprendizado e demonstração.
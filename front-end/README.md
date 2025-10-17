# 🎮 Catálogo de Jogos - Font-end

## 🧩 Descrição do Projeto

O **Catálogo** é uma aplicação web que permite ao usuário **gerenciar seu catálogo de jogos pessoais**, possibilitando cadastrar, editar e visualizar jogos e plataformas, além de avaliar e categorizar títulos conforme seu progresso ou opinião.

A aplicação foi construída utilizando o **Next.js (React.js)** no front-end e **Node.js + Express** no back-end, com **banco de dados relacional (SQLite)**.

---

## 🚀 Funcionalidades Principais

- 👤 **Cadastro e Login de Usuário**
- 🎮 **CRUD de Jogos**
- 🕹️ **CRUD de Plataformas** (Steam, PSN, Epic Games, etc.)
- 🏷️ **Categorias de Jogos**
  - Jogado
  - Jogando
  - Zerado
  - Não recomendo
  - Outros status
- ⭐ **Avaliação do Jogo** (nota)
- 💻 **Associação Jogo ↔ Plataforma**
- 📱 **Interface Responsiva** (desktop e mobile)
- ✅ **Usabilidade** baseada nas **10 heurísticas de Nielsen**

---

## 🧱 Estrutura do Projeto

```
.
|__.gitignore
|__jsconfig.json
|__next.config.js
|__package-lock.json
|__package.json
|__public
|  |__img
|  |   ├─ botao-adicionar.png
|  |   ├─ call-of-duty.png
|  |   ├─ free-fire.png
|  |   ├─ league-of-legends.png
|  |   └─ outros…
|__src
|  |__app
|  |   ├─ biblioteca/
|  |   ├─ cadastro/
|  |   ├─ comunidade/
|  |   ├─ createUser/
|  |   ├─ esqueceuSenha/
|  |   ├─ home/
|  |   ├─ login/
|  |   ├─ noticias/
|  |   ├─ sobre/
|  |   ├─ [user]/
|  |   ├─ layout.js
|  |   ├─ page.js
|  |   └─ globals.css
|  |
|  |__components/
|  |   ├─ card.js
|  |   ├─ cardBiblioteca.js
|  |   ├─ cadastraJogo.js
|  |   ├─ cadastraPlataforma.js
|  |   ├─ listaJogos.js
|  |   ├─ listaPlataforma.js
|  |   ├─ navbar.js
|  |   └─ navBarHome.js
|  |
|  |__util/
|  |   ├─ axios.js
|  |   └─ sendEmail.js
|  |
|  └─ middleware.js
|__README.md
|__yarn.lock
```

---

## ⚙️ Tecnologias Utilizadas

### **Front-end**
- [Next.js](https://nextjs.org/)
- [React.js](https://react.dev/)

- [Axios](https://axios-http.com/)
- [CSS Modules / Global CSS]*

### **Back-end**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [SQLite3](https://www.sqlite.org/)
- [Sequelize ORM (opcional)](https://sequelize.org/)
- [Nodemailer](https://nodemailer.com/) *(para envio de e-mails de recuperação de senha)*

---

## 🧰 Requisitos do Sistema

- **Node.js** ≥ 18.0.0  
- **npm** ou **yarn** instalado  
- **SQLite3** configurado (instância local)

---

## 🏗️ Instalação e Execução

### 1. Clone o repositório:
```bash
git clone git@github.com:WelysonSR/projeto_final_Ensino.git
cd ./fornt-end
```

### 2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto:
```bash
npm run dev
# ou
yarn dev
```

O servidor será iniciado em **http://localhost:3000**

---

## 🧪 Scripts Disponíveis

| Comando | Descrição |
|----------|------------|
| `yarn dev` | Inicia o servidor de desenvolvimento |
| `yarn build` | Gera o build de produção |
| `yarn start` | Inicia o servidor em modo produção |
| `yarn lint` | Verifica erros de linting no código |

---

## 🧩 Estrutura do Banco de Dados

O banco é criado automaticamente na primeira execução.

### Tabelas:
- **Usuários**
  - id, nome, email, senha, dataCadastro
- **Plataformas**
  - id, nome, imagem
- **Jogos**
  - id, nome, categoria, nota, plataformaId
- **Categorias**
  - id, descricao
- **Relação Jogo ↔ Categoria**

---

## 🏁 Licença

Este projeto é de **uso educacional** e pode ser reutilizado livremente para fins de aprendizado e demonstração.

# 🎮 Catálogo de Jogos — Projeto Educacional

## 📘 Sobre o Projeto

Este projeto foi desenvolvido passo a passo com o objetivo de **ensinar estudantes do curso de Análise e Desenvolvimento de Sistemas** sobre o processo completo de criação de uma aplicação web moderna.

A aplicação permite ao usuário **gerenciar um catálogo de jogos pessoais**, com funcionalidades de cadastro, categorização e avaliação de títulos.

---

## 🚀 Funcionalidades Principais

* Cadastro e login de usuários
* CRUD completo de jogos
* CRUD de plataformas de jogos (Steam, PSN, Epic Games, etc.)
* Classificação de jogos (jogado, jogando, zerado, não recomendo, outros)
* Associação de um ou mais status a cada jogo
* Atribuição de nota para cada jogo
* Exibição das plataformas disponíveis para cada título

---

## 🧩 Tecnologias Utilizadas

### Front-end

* **React.js**
* **HTML5, CSS3 e JavaScript**
* (Opcional) **Bootstrap** para estilização responsiva

### Back-end

* **Node.js com Express.js**
* **Banco de Dados Relacional (SQLite recomendado)**
* **API REST** para comunicação com o front-end

---

## 🗃️ Estrutura do Projeto

```
📦 raiz-do-projeto
├── 📁 src
│   ├── 📁 frontend
│   └── 📁 backend
└── README.md
```

---

## ⚙️ Requisitos do Sistema

1. O backend deve criar automaticamente as tabelas e preencher o banco com registros de exemplo ao iniciar.
2. O frontend deve se comunicar com a API REST do backend.
3. A aplicação deve ser **totalmente responsiva** (desktop e mobile).
4. O sistema deve seguir as **10 heurísticas de usabilidade de Nielsen**.

---
## 🚀 Inicialização do Projeto

Para instalar as dependências e iniciar a aplicação, siga os passos abaixo:

```bash
# Instalar dependências do back-end e front-end
yarn install:all

# Rodar o projeto em modo de desenvolvimento
yarn dev
```

> **Observação:**  
> O script `yarn install:all` está configurado para instalar as dependências das pastas `back-end` e `front-end` automaticamente.  
> O comando `yarn dev` inicia ambos os servidores em paralelo usando `concurrently`.

---

## 🧠 Conceitos Envolvidos

* Usabilidade e design responsivo
* Integração entre front-end e back-end via API REST
* Organização de dados com banco relacional
* Boas práticas de versionamento e entrega de software

---

## 🧑‍💻 Objetivo Educacional

Este projeto foi elaborado com **finalidade didática**, para demonstrar na prática:

* O ciclo completo de desenvolvimento web;
* A aplicação de heurísticas de usabilidade;
* O uso combinado de **React.js**, **Node.js** e **banco de dados relacional**;
* A importância da integração entre front-end e back-end.

---

## 🧾 Licença

Este projeto é de **uso educacional** e pode ser reutilizado livremente para fins de aprendizado e demonstração.
---


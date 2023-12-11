require('dotenv').config();

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

connection.query('DROP DATABASE IF EXISTS dev_games', (err) => {
  if (err) {
    console.error('Erro ao excluir o banco de dados dev_games:', err);
  } else {
    console.log('Banco de dados "dev_games" excluído com sucesso');
  }
});


connection.query('CREATE DATABASE IF NOT EXISTS dev_games', (err) => {
  if (err) {
    console.error('Erro ao criar o banco de dados:', err);
  } else {
    console.log('Banco de dados criado com sucesso');

    // Usa o banco de dados
    connection.query('USE dev_games', (err) => {
      if (err) {
        console.error('Erro ao usar o banco de dados dev_games:', err);
      } else {
        console.log('Usando o banco de dados dev_games');

        // Cria tabela User
        const createTableUser = `
          CREATE TABLE Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user VARCHAR(50) NOT NULL,
            firstName VARCHAR(50) NOT NULL,
            lastName VARCHAR(50) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(50) NOT NULL,
            userExit BOOLEAN DEFAULT 1
          );
        `;
        connection.query(createTableUser, (err) => {
          if (err) {
            console.error('Erro ao criar a tabela: User', err);
          } else {
            console.log('Tabela criada com sucesso User');
          }
        });

        // Cria tabela Plataforma
        const createTablePlataforma = `
          CREATE TABLE Plataforma (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            INDEX (nome)  -- Add an index on the 'nome' column
          );
        `
        connection.query(createTablePlataforma, (err) => {
          if (err) {
            console.error('Erro ao criar a tabela Plataforma:', err);
          } else {
            console.log('Tabela criada com sucesso Plataforma');
          }

        });

        // Cria tabela Jogo
        const createTableJogos = `
          CREATE TABLE Jogo (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            cat VARCHAR(255),
            plataforma_que VARCHAR(255),
            nota DECIMAL(3,1),
            status ENUM('jogando', 'jogado', 'zerado', 'outros'),
            recomendacao ENUM('Sim', 'Não'),
            INDEX (nome)  -- Add an index on the 'nome' column
          );
        `
        connection.query(createTableJogos, (err) => {
          if (err) {
            console.error('Erro ao criar a tabela Jogos:', err);
          } else {
            console.log('Tabela criada com sucesso Jogos');
          }
        });

        // Cria tabela Jogo_Plataforma
        const createTableJogoPlataforma = `
          CREATE TABLE Jogo_Plataforma (
            id INT AUTO_INCREMENT PRIMARY KEY,
            id_jogo INT NOT NULL,
            id_plataforma INT NOT NULL,
            FOREIGN KEY (id_jogo) REFERENCES Jogo(id),
            FOREIGN KEY (id_plataforma) REFERENCES Plataforma(id),
            UNIQUE KEY unique_jogo_plataforma (id_jogo, id_plataforma)
          );
        `
        connection.query(createTableJogoPlataforma, (err) => {
          if (err) {
            console.error('Erro ao criar a tabela Jogo_Plataforma:', err);
          } else {
            console.log('Tabela criada com sucesso Jogo_Plataforma');
          }
        });

        // Cria tabela User_Jogo
        const createTableUserJogo = `
          CREATE TABLE User_Jogo (
            id INT AUTO_INCREMENT PRIMARY KEY,
            userId INT,
            jogoId INT,
            FOREIGN KEY (userId) REFERENCES Users(id),
            FOREIGN KEY (jogoId) REFERENCES Jogo(id),
            UNIQUE KEY unique_user_jogo (userId, jogoId)
          );
        `
        connection.query(createTableUserJogo, (err) => {
          if (err) {
            console.error('Erro ao criar a tabela User_Jogo:', err);
          } else {
            console.log('Tabela criada com sucesso User_Jogo');
          }
        });

        const insertUsers = `
          INSERT INTO Users (user, firstName, lastName, email, password, userExit) VALUES
            ('user1', 'John', 'Doe', 'john.doe@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true),
            ('user2', 'Jane', 'Smith', 'jane.smith@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true),
            ('user3', 'Bob', 'Johnson', 'bob.johnson@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true),
            ('user4', 'Alice', 'Jones', 'alice.jones@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true),
            ('user5', 'Charlie', 'Brown', 'charlie.brown@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true),
            ('user6', 'Eva', 'Miller', 'eva.miller@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true),
            ('user7', 'David', 'Williams', 'david.williams@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true),
            ('user8', 'Sophia', 'Davis', 'sophia.davis@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true),
            ('user9', 'Michael', 'Moore', 'michael.moore@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true),
            ('user10', 'Olivia', 'Taylor', 'olivia.taylor@email.com', '5f4dcc3b5aa765d61d8327deb882cf99', true);
          `
        // Inserindo Usuarios
        connection.query(insertUsers, (err) => {
          if (err) {
            console.error('Erro ao inserir dados na tabela Users:', err);
          } else {
            console.log('Dados inseridos na tabela Users com sucesso');
          }
        });

        const insertPlataforma = `
          INSERT INTO Plataforma (nome) VALUES
            ('Steam'),
            ('Xbox Store'),
            ('Uplay'),
            ('GOG'),
            ('Epic Games Store'),
            ('PlayStation Store'),
            ('G2A'),
            ('Green Man Gaming'),
            ('Humble Store'),
            ('Origin')
          `;
        // Inserindo plataformas
        connection.query(insertPlataforma, (err) => {
          if (err) {
            console.error('Erro ao inserir dados na tabela Plataforma:', err);
          } else {
            console.log('Dados inseridos na tabela Plataforma com sucesso');
          }
        });

        const insertJogos = `
        INSERT INTO Jogo (nome, cat, plataforma_que, nota, status, recomendacao) VALUES
        ('The Witcher 3', 'RPG', 'Epic Games Store', 9.5, 'zerado', 'Sim'),
        ('Red Dead Redemption 2', 'Ação e Aventura', 'Steam', 9.8, 'zerado', 'Sim'),
        ('Animal Crossing: New Horizons', 'Simulação', 'Uplay', 9.0, 'jogado', 'Sim'),
        ('Cyberpunk 2077', 'RPG', 'Steam', 8.0, 'outros', 'Não'),
        ('Among Us', 'Multijogador', 'Steam', 8.5, 'jogado', 'Sim'),
        ('The Legend of Zelda: Breath of the Wild', 'Ação e Aventura', 'PlayStation Store', 9.7, 'zerado', 'Sim'),
        ('GTA V', 'Ação e Aventura', 'PC', 9.3, 'zerado', 'Sim'),
        ('FIFA 23', 'Esportes', 'PlayStation Store', 8.2, 'jogado', 'Sim'),
        ('Minecraft', 'Aventura', 'Epic Games Store', 9.0, 'zerado', 'Sim'),
        ('Super Mario Odyssey', 'Ação e Aventura', 'Uplay', 9.5, 'zerado', 'Sim');
          `
        // Inserindo Jogos
        connection.query(insertJogos, (err) => {
          if (err) {
            console.error('Erro ao inserir dados na tabela Jogos:', err);
          } else {
            console.log('Dados inseridos na tabela Jogos com sucesso');
          }
        });

        const insertJogoPlataforma = `
          INSERT INTO Jogo_Plataforma (id_jogo, id_plataforma) VALUES
            (1, 1),
            (1, 4),
            (1, 5),
            (2, 1),
            (2, 2),
            (3, 3),
            (4, 4),
            (4, 1),
            (5, 7),
            (6, 3),
            (6, 8),
            (7, 4),
            (7, 1),
            (7, 2),
            (8, 5),
            (8, 6),
            (8, 9),
            (8, 10),
            (9, 4),
            (9, 1),
            (9, 2),
            (9, 3),
            (10, 3),
            (10, 7);
          `
        // Inserindo Relacinamento Jogo_Plataforma
        connection.query(insertJogoPlataforma, (err) => {
          if (err) {
            console.error('Erro ao inserir dados na tabela Jogo_Plataforma:', err);
          } else {
            console.log('Dados inseridos na tabela Jogo_Plataforma com sucesso');
          }
        });

        // Inserindo Relacinamento User_Jogo
        const insertUserJogo = `
          INSERT INTO User_Jogo (userId, jogoId) VALUES
            (1, 1),
            (1, 2),
            (2, 3),
            (2, 4),
            (3, 5),
            (3, 6),
            (4, 7),
            (4, 8),
            (5, 9),
            (5, 10),
            (6, 1),
            (6, 2),
            (7, 3),
            (7, 4),
            (8, 5),
            (8, 6),
            (9, 7),
            (9, 8),
            (10, 9),
            (10, 10);
        `
        connection.query(insertUserJogo, (err) => {
          if (err) {
            console.error('Erro ao inserir dados na tabela Jogo_Plataforma:', err);
          } else {
            console.log('Dados inseridos na tabela Jogo_Plataforma com sucesso');
          }
        });

        // Fecha a conexão
        connection.end();
      }
    });
  }
});
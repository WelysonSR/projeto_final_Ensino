const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados MySQL');
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
            status ENUM('jogado', 'zerado', 'outros'),
            recomendacao ENUM('Sim', 'Não'),
            plataforma_disp VARCHAR(255),
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
            FOREIGN KEY (id_plataforma) REFERENCES Plataforma(id)
          );
        `
        connection.query(createTableJogoPlataforma, (err) => {
          if (err) {
            console.error('Erro ao criar a tabela Jogo_Plataforma:', err);
          } else {
            console.log('Tabela criada com sucesso Jogo_Plataforma');
          }
        });

        const insertUsers = `
          INSERT INTO Users (user, firstName, lastName, email, password, userExit) VALUES
            ('user1', 'John', 'Doe', 'john.doe@email.com', 'password1', true),
            ('user2', 'Jane', 'Smith', 'jane.smith@email.com', 'password2', true),
            ('user3', 'Bob', 'Johnson', 'bob.johnson@email.com', 'password3', true),
            ('user4', 'Alice', 'Jones', 'alice.jones@email.com', 'password4', true),
            ('user5', 'Charlie', 'Brown', 'charlie.brown@email.com', 'password5', true),
            ('user6', 'Eva', 'Miller', 'eva.miller@email.com', 'password6', true),
            ('user7', 'David', 'Williams', 'david.williams@email.com', 'password7', true),
            ('user8', 'Sophia', 'Davis', 'sophia.davis@email.com', 'password8', true),
            ('user9', 'Michael', 'Moore', 'michael.moore@email.com', 'password9', true),
            ('user10', 'Olivia', 'Taylor', 'olivia.taylor@email.com', 'password10', true);
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
            ('PlayStation 4'),
            ('Xbox One'),
            ('Nintendo Switch'),
            ('PC'),
            ('PlayStation 5'),
            ('Xbox Series X'),
            ('Mobile'),
            ('PlayStation 3'),
            ('Xbox 360'),
            ('Wii');
          `
        // Inserindo plataformas
        connection.query(insertPlataforma, (err) => {
          if (err) {
            console.error('Erro ao inserir dados na tabela Plataforma:', err);
          } else {
            console.log('Dados inseridos na tabela Plataforma com sucesso');
          }
        });

        const insertJogos = `
          INSERT INTO Jogo (nome, cat, plataforma_que, nota, status, recomendacao, plataforma_disp) VALUES
            ('The Witcher 3', 'RPG', 'PC', 9.5, 'zerado', 'Sim', 'PC, PlayStation 4, Xbox One'),
            ('Red Dead Redemption 2', 'Ação e Aventura', 'PlayStation 4', 9.8, 'zerado', 'Sim', 'PlayStation 4, Xbox One'),
            ('Animal Crossing: New Horizons', 'Simulação', 'Nintendo Switch', 9.0, 'jogado', 'Sim', 'Nintendo Switch'),
            ('Cyberpunk 2077', 'RPG', 'PC', 8.0, 'outros', 'Não', 'PC, PlayStation 4, Xbox One'),
            ('Among Us', 'Multijogador', 'Mobile', 8.5, 'jogado', 'Sim', 'Mobile'),
            ('The Legend of Zelda: Breath of the Wild', 'Ação e Aventura', 'Nintendo Switch', 9.7, 'zerado', 'Sim', 'Nintendo Switch'),
            ('GTA V', 'Ação e Aventura', 'PC', 9.3, 'zerado', 'Sim', 'PC, PlayStation 4, Xbox One'),
            ('FIFA 22', 'Esportes', 'PlayStation 5', 8.2, 'jogado', 'Sim', 'PlayStation 4, PlayStation 5, Xbox One, Xbox Series X'),
            ('Minecraft', 'Aventura', 'PC', 9.0, 'zerado', 'Sim', 'PC, PlayStation 4, Xbox One, Nintendo Switch'),
            ('Super Mario Odyssey', 'Ação e Aventura', 'Nintendo Switch', 9.5, 'zerado', 'Sim', 'Nintendo Switch');
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
        // Inserindo Relacinamento 
        connection.query(insertJogoPlataforma, (err) => {
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

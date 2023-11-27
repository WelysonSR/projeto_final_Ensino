/* eslint-disable no-unused-vars */
/** @type {import('sequelize-cli').Migration}*/
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      user: 'Ususário 1',
      firstName: 'Nome do Usuário 1',
      lastName: 'Sobrenome do Usuário 1',
      email: 'usuario1@hotmail.com',
      password: '25d55ad283aa400af464c76d713c07ad',
      
    },
    {
      user: 'Ususário 2',
      firstName: 'Nome do Usuário 2',
      lastName: 'Sobrenome do Usuário 2',
      email: 'usuario2@hotmail.com',
      password: '25d55ad283aa400af464c76d713c07ad',
      
    },
  ]),

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
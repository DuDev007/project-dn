'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [
      {
        email: 'minh1997@gmail.com',
        password: '123456',
        firstName: 'kai do',
        lastName: 'hello',
        address: 'Vietnam',
        phoneNumber: 0905123456,
        gender: 1,
        roleId: 'R1',
        positionId: 'P0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bands', {
      band_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      band_name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      band_genre: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      band_start_time: {
        type: Sequelize.DATE,
        allowNull:false
      },
      band_end_time: {
        type: Sequelize.DATE,
        allowNull:false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bands');
  }
};
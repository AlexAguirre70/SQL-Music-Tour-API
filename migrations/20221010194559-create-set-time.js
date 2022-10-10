'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
     set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      set_time_event_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      set_time_stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      set_time_band_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      set_time_start: {
        type: Sequelize.DATE,
        allowNull: false
      },
      set_time_end: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};
'use strict';
const fs = require("fs");
var path = require("path");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      const sql = fs.readFileSync(
        path.join(__dirname, "initial-migration.sql"),
        "utf8",
      );
      return queryInterface.sequelize.query(sql);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

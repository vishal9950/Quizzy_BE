

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('states', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    quesid: {
      type: Sequelize.INTEGER,
    },
    option: {
      type: Sequelize.STRING,
    },
    rt: {
      type: Sequelize.BOOLEAN,
    },
    username: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('states'),
};

const {Sequelize, sequelize, DataTypes} = require('../db')

const Board = sequelize.define('board', {
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  rating: {
    type: DataTypes.NUMBER,
    max: 10
  }
})

module.exports = {
  Board
}
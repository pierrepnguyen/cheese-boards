const {User} = require('./User.js')
const {Board} = require('./Board.js')
const {Cheese} = require('./Cheese.js')

User.hasMany(Board);
Board.belongsToMany(Cheese, {through: 'CheeseBoards'})
Cheese.belongsToMany(Board, {through: 'CheeseBoards'})

module.exports = {
  User,
  Board,
  Cheese
}
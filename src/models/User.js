const {Sequelize, sequelize, DataTypes} = require('../db')

let User = sequelize.define('user', {
  name: Sequelize.STRING,
  email: {
    type: DataTypes.STRING,
    validate: {isEmail: true}
  }
})

module.exports ={
  User
}
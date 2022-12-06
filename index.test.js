const { DESCRIBE } = require('sequelize/types/query-types')
const {sequelize} = require('./db')
const {User, Board, Cheese} = require('./models/index')

DESCRIBE('User, Cheese and Board Models', ()=>{
  beforeAll(async () =>{
    await sequelize.sync({force: true})
  })

  
})
const {sequelize} = require('../db')
const {User, Board, Cheese} = require('../models/index')

// TESTING FOR MODEL FUNCTIONALITIES
describe('User, Cheese and Board Models', ()=>{
  beforeAll(async () =>{
    await sequelize.sync({force: true})
  })

  // Making sure models can be created
  test('can create user model', async() =>{
    let testUser = await User.create({
      name: 'Pierre',
      email: 'test@email.com'
    })

    expect(testUser).toBeDefined()
    expect(testUser.name).toBe('Pierre')
    expect(testUser.email).toBe('test@email.com')
  })

  test('can create board model', async() =>{
    let testBoard = await Board.create({
      type: 'Assortment 1',
      description: 'French',
      rating: 7
    })

    expect(testBoard.type).toBeDefined()
    expect(testBoard.type).toBe('Assortment 1')
    expect(testBoard.description).toBe('French')
    expect(testBoard.rating).toBe(7)
  })

  test('can create cheese model', async() =>{
    let testCheese = await Cheese.create({
      title: 'Compte',
      description: 'French'
    })

    expect(testCheese).toBeDefined()
    expect(testCheese.title).toBe('Compte')
    expect(testCheese.description).toBe('French')
  })

})
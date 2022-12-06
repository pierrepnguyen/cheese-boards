const {sequelize} = require('../db')
const {User, Board, Cheese} = require('../models/index')

describe('Model associations', ()=>{
  beforeAll(async()=>{
    await sequelize.sync({force: true})
  })

  test('User can have many boards', async() =>{
    let testUser = await User.create({
      name: 'Pierre',
      email: 'test@email.com'
    })

    let board_1 = await Board.create({
      type: 'Assortment 1',
      description: 'French',
      rating: 7
    })

    let board_2 = await Board.create({
      type: 'Assortment 2',
      description: 'American',
      rating: 5
    })

    await testUser.addBoard(board_1)
    await testUser.addBoard(board_2)
    
    expect(await testUser.hasBoards(board_1)).toBe(true)
    expect(await testUser.countBoards()).toBe(2)
  })

  test('Cheese can have many boards', async() =>{
    const testCheese = await Cheese.create({
      title: 'Compte',
      description: 'French'
    })

    let board_1 = await Board.create({
      type: 'Assortment 1',
      description: 'French',
      rating: 7
    })

    let board_2 = await Board.create({
      type: 'Assortment 2',
      description: 'American',
      rating: 5
    })

    await testCheese.addBoards([board_1, board_2])
    expect(await testCheese.countBoards()).toBe(2)
  })

  test('Boards can have many cheese', async() =>{
    let board = await Board.create({
      type: 'Assortment 1',
      description: 'French',
      rating: 7
    })

    let cheeses = await Cheese.findAll()
    console.log(cheeses)
    await board.addCheeses(cheeses)
    expect(await board.countCheeses()).toBe(2)
  })
})
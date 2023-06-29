import fastify from 'fastify'
import { knex } from './database'
import { randomUUID } from 'crypto'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .insert({
      id: randomUUID(),
      title: 'Tranção de teste',
      amount: 1000,
    })
    .returning('*')

  return transactions
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is Running!')
  })

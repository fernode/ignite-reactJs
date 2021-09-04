import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import App from './App'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela de website',
          type: 'deposity',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Jantar em familía',
          type: 'withdraw',
          category: 'Lazer',
          amount: 200,
          createdAt: new Date('2021-03-12 22:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', (schema) => {
      return schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

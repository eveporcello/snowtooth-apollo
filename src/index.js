import React from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import { LiftStatusTableWithData } from './components/LiftStatusTableWithData'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider }
from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://www.moonhighway.com/class/snowtooth/graphiql'
  })
})

render(<ApolloProvider client={client}>
          <LiftStatusTableWithData />
       </ApolloProvider>,
  document.getElementById('root')
)

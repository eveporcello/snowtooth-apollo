import React from 'react'
import { render } from 'react-dom'
import './index.css'
import {LiftStatusTableWithData} from './LiftStatusTableWithData'
import registerServiceWorker from './registerServiceWorker'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider }
from 'react-apollo'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://www.moonhighway.com/graphiql'
  })
})

render(
  <ApolloProvider client={client}>
    <LiftStatusTableWithData />
  </ApolloProvider>,
  document.getElementById('root')
)
registerServiceWorker()

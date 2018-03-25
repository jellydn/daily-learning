import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { setContext } from 'apollo-link-context'

import './styles.css'
import App from './App'

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' })

const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_TOKEN

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }
})

const link = authLink.concat(httpLink)

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

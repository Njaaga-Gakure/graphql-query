import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { Users } from "./components"
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache() ,
    uri: "http://localhost:4000/graphql"
  })
  return (
    <ApolloProvider client={client}>
      <Users />
    </ApolloProvider>
  )
}

export default App

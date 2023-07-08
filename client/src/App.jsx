import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Users, SingleUser } from "./pages"
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache() ,
    uri: "http://localhost:4000/graphql"
  })
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<SingleUser />} />
        </Routes>
      </Router>
    </ApolloProvider>
  )
}

export default App

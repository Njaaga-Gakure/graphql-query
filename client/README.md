# Fetching Data From a GraphQL API

### Introduction

The following application show how to fetch data from a graphql api in react using the @apollo/client and graphql dependencies

### Install

To use @apollo/client and graphql, we first need to install both of them. Since you are using Vite or Create-React-App to run this react application, I will assume you already have npm install in you computer. To install the aformentioned dependencies we run the following command:

        npm install @apollo/client graphql

### Getting Started

In your App.jsx, (assuming vite was used), we first import three things, ApolloClient, InMemoryCache, ApolloProvider:

        import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

Second, in your App component create an instance of ApolloClient which take an object as an argument. The first property of the object is cache whose value is an instance of InMemoryCache and the second is uri whose value is the uri of the graphql api.

        const client = new ApolloClient({
            cache: new InMemoryCache(),
            uri: "http://localhost:4000/graphql"
        })

Lastly, wrap the entire return of your App.jsx with the ApolloProvider with takes the client created above as a prop.

        return (
            <ApolloProvider client={client}>
                <TestComponent / >
            </ApolloProvider>
        )

In its entirity, your App.jsx will look like this:

         import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"


         const App = () => {
            const client = new ApolloClient({
                cache: new InMemoryCache(),
                uri: the_graphql_api_uri
            })

            return (
                <ApolloProvider client={client}>
                    <TestComponent / >
                </ApolloProvider>
            )
         }

         export default App

### Fetching the data

Let's say we want to fetch data in TestComponent, we need two imports from @apollo/client, useQuery hook and gql:

        import { useQuery, gql } from "@apollo/client"

gql is a helper function from @apollo/client that helps us as frontend developers to make queries and/or mutations to a graphql api. Below is an example of how a graph query would look like:

        const QUERY_ALL_USERS = gql`
            query getAllUsers {
                users {
                    id
                    name
                    username
                    nationality
            }
        `

Now inside your react component, you can pass the query as an argument of the useQuery hook and it in turn returns an object with useful information we can use:

        const { loading, error, data } = useQuery(QUERY_ALL_USERS)

This is how the component we look in the end.

         import { useQuery, gql } from "@apollo/client"


          const QUERY_ALL_USERS = gql`
            query getAllUsers {
                users {
                    id
                    name
                    username
                    nationality
            }
        `

        const TestComponent = () => {
            const { loading, error, data } = useQuery(QUERY_ALL_USERS)

            return (
                <h1>Test Component</h1>
            )
        }
        export default TestComponent

In the return of the component, it is up to you sa the developer to decide how you would wnat to render the data.

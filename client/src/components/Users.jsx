import { useQuery, gql } from "@apollo/client"
import { styled } from "styled-components"

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      name
      username
      nationality
      age
    }
  }  

`
const Users = () => {
  // useQuery retuns an object, we can destructure it
  // and get the loading, error, data properties 
  const { loading, error, data } = useQuery(QUERY_ALL_USERS)
  
  if (loading) {
    return (
      <div className="full-page">
        <h1 className="loading">loading...</h1>
      </div>
    )
  }
  if (error) {
    return (
      <div className="full-page">
        <h3 className="error">Something went wrong, try again later :(</h3>
      </div>
    )
  }

  return (
    <Wrapper>
     <div className="center-container">
      {data && data.users.map(({id, name, username, nationality, age}) => {
          return (
            <article key={id} className="user">
              <h4 className="user-name">{name}</h4>
              <hr />
              <div className="info">
                <p><span>username : </span>{username}</p>
                <p><span>nationality : </span>{nationality}</p>
                <p><span>age : </span>{age} years</p>

              </div>
            </article>
          )
     })}
     </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
    padding: 2rem 0;
  .center-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem 1rem;
  }
  .user {
    background: var(--gray-50);
    padding: 0 2rem;
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius-1);
  }
  .user-name {
    text-align: center;
    letter-spacing: 2px;
    color: var(--primary-300);
  }
  .info {
    p {
      letter-spacing: 1px;
      text-transform: capitalize;
      color: var(--primary-100);
      span {
        color: var(--primary-400);
      }
    }
  }
`
export default Users
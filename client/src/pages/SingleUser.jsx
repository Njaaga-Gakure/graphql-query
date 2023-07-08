import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import { Link } from "react-router-dom"
const QUERY_USER = gql`
  query getSingleUser($id: ID!){
    user(id: $id) {
      id
      name
      username
      nationality
      age
    }
  }
`
const SingleUser = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(QUERY_USER, {variables: {id}})
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
  const { name, username, nationality, age } = data.user
  return (
    <Wrapper>
    <div className="center-container">
      <article className="user">
                  <h4 className="user-name">{name}</h4>
                  <hr />
                  <div className="info">
                    <p><span>username : </span>{username}</p>
                    <p><span>nationality : </span>{nationality}</p>
                    <p><span>age : </span>{age} years</p>
                  </div>
        </article>
        <div className="btn-container">
          <Link to="/users" className="btn"> 
            back to users 
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
   .user {
    background: var(--gray-50);
    padding: 1rem 2rem;
    box-shadow: var(--shadow-1);
    border-radius: var(--border-radius-1);
    width: 300px;
    margin: 2rem auto;
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
  .btn-container {
    text-align: center;
  }
`
export default SingleUser
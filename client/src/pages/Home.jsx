import { styled } from "styled-components"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <Wrapper className="full-page">
        <div>
            <h1 className="title">GraphQL (Query)</h1>
        <div className="btn-container">
        <Link to="/users" className="btn animated-btn">
                view all users
        </Link>
        </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
.btn-container {
    text-align: center;
}
.title {
    letter-spacing: 2px;
    color: var(--gray-500);
}
`
export default Home
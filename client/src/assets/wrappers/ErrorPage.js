import styled from 'styled-components'

const Wrapper = styled.main`
  padding:2rem;
  text-align: center;
  flex-direction: column;
  img {
    max-width: 90vw;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
  @media (min-width: 992px) {
    img {
      max-width: 900px;
    }
  }
`

export default Wrapper

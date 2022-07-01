import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from "../assets/images/not-found.svg"

const Error = () => {
  return (
    <Wrapper className="full-page">
        
            <img src={img} alt="404 error image"  />
            <h3>Error</h3>
            <p>
                Ahhh! Page not found!
            </p>
            <Link to="/">back home</Link>
        
    </Wrapper>
  )
}
export default Error
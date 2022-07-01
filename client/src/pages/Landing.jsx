import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"
import { Link } from "react-router-dom"
const Landing = () => {
  return (
    <Wrapper>
        <Logo />
        <div className ="container page">
          {/* info */}
          
            <div className="info">
              <h1>job <span>tracking</span> app</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Eius quo corrupti
                perspiciatis quidem ut itaque velit 
                ipsum aliquid reiciendis ab, cumque facere 
                aliquam distinctio possimus, mollitia voluptas
                tenetur placeat sapiente odit quos doloremque 
                molestias voluptate quibusdam? 
              </p>
              <Link to="/register"className="btn btn-hero">Login/Register</Link>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
        </div>
    </Wrapper>
  )
}

export default Landing
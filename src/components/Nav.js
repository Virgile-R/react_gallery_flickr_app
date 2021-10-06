import { NavLink } from "react-router-dom"
function Nav() {
    return(
        <nav className="main-nav">
        <ul>
          <li><NavLink to='/search/cats'>Cats</NavLink></li>
          <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/search/computers'>Computers</NavLink></li>
        </ul>
      </nav>
    )   
   }
   
   export default Nav
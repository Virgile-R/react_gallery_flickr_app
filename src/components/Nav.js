import { NavLink } from "react-router-dom"
function Nav() {
   
  return(
        
       <ul> 
          <li><NavLink to="/search/cats"> Cats </NavLink></li>
          <li><NavLink to="/search/dogs"> Dogs </NavLink></li>
          <li><NavLink to="/search/otters"> Otters </NavLink></li>
        </ul>
          
        
      
    )   
   }
   
   export default Nav
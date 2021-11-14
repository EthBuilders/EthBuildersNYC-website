// from: https://baseweb.design/components/header-navigation/
import { StyledNavigationItem } from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { NavLink } from "react-router-dom";

const NavigationItem = ({linkName, link}) =>  {

    return (  
      <div>
      
      <StyledNavigationItem>

        <NavLink 
          to={link}
          exact
        >
        <StyledLink >
          {linkName}
        </StyledLink>
        </NavLink>

      </StyledNavigationItem>

      </div>
    )
}

export default NavigationItem;

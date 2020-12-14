// from: https://baseweb.design/components/header-navigation/
import { StyledNavigationItem } from "baseui/header-navigation";
import { StyledLink } from "baseui/link";

const NavigationItem = (props) =>  {
    return (    
      <StyledNavigationItem>
        <StyledLink href={props.href}>
          {props.name}
        </StyledLink>
      </StyledNavigationItem>
    );
}

export default NavigationItem;

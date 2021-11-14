// from: https://baseweb.design/components/header-navigation/
import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { Button } from "baseui/button";
import { NavLink } from "react-router-dom";
import NavigationItem from "./NavigationItem";

const Header = () =>  {

  const handleJoin = () => {
    
    return <NavLink
        to="/join"
        exact
      >
    </NavLink>
  }

    return (
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>EthBuilders.NYC</StyledNavigationItem>
        </StyledNavigationList>

        <StyledNavigationList $align={ALIGN.center} />

        <StyledNavigationList $align={ALIGN.right}>
          <NavigationItem 
            linkName="About" 
            link="/"
            />

          <NavigationItem 
            linkName="Events" 
            link="/events"
            />

          <NavigationItem 
            linkName="Blog" 
            link="/blog"
            />

        <NavigationItem 
            linkName="Resources" 
            link="/resources"
            />

        </StyledNavigationList>

        <StyledNavigationList $align={ALIGN.right}>
          <StyledNavigationItem>
            <Button>Get started</Button>
          </StyledNavigationItem>
        </StyledNavigationList>

      </HeaderNavigation>
    );
}

export default Header;

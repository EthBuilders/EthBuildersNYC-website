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

    return (
      <HeaderNavigation>
        <StyledNavigationList style={{marginLeft: "3%"}}>
          <StyledNavigationItem id="eth-id">EthBuilders.NYC</StyledNavigationItem>
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

        <StyledNavigationList $align={ALIGN.right} style={{marginRight: "3%"}}>
          <StyledNavigationItem link="/resources">
            <NavLink to="/join" exact>
              <Button>
                Get started
              </Button>
            </NavLink>
          </StyledNavigationItem>
        </StyledNavigationList>

      </HeaderNavigation>
    );
}

export default Header;

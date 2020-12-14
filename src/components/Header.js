// from: https://baseweb.design/components/header-navigation/
import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { Button } from "baseui/button";
import NavigationItem from "./NavigationItem";

const Header = (props) =>  {
    return (
      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>{props.brandName}</StyledNavigationItem>
        </StyledNavigationList>

        <StyledNavigationList $align={ALIGN.center} />

        <StyledNavigationList $align={ALIGN.right}>
          <NavigationItem 
            name="About"
            href="#basic-link1" />

          <NavigationItem 
            name="Events"
            href="#basic-link2" />

          <NavigationItem 
            name="Blog"
            href="#basic-link3" />

        <NavigationItem 
            name="Meetup"
            href="#basic-link3" />

        <NavigationItem 
            name="Resources"
            href="#basic-link3" />
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

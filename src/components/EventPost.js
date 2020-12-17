import * as React from "react";
import {styled} from 'baseui';
import { StyledLink } from "baseui/link";

const PostDiv = styled('div', {
  fontSize: '1.2rem',
  marginBottom: '0.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
});

const SpanDate = styled('div', {
  opacity: '0.8',
});

const SpanArrow = styled('div', {
  opacity: '0.5',
  paddingLeft: '0.5%',
  paddingRight: '1%',
});

const EventPost = (props) => {
  return (
    <PostDiv>
      <SpanDate>{props.date}</SpanDate>
      <SpanArrow>&raquo; </SpanArrow>
      <StyledLink href={props.link}>
        {props.event}
      </StyledLink>
    </PostDiv>
  );
}

export default EventPost;
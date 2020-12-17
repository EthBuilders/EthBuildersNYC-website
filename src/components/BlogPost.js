import * as React from "react";
import {styled} from 'baseui';

const BlogPostDiv = styled('div', {
  fontFamily: "sans-serif",
  fontSize: '1.2rem',
  marginBottom: '0.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
  wordWrap: 'break-word',
});

const BlogPostTitle = styled('div', {
  marginTop: '0',
  marginRight: '0',
  marginBottom: '0.25rem',
  marginLeft: '0',
  fontSize: '1.2rem',
  fontWeight: 'bold',
});

const BlogPostDate = styled('div', {
  fontSize: '1.2rem',
  marginBottom: '0.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
});

const BlogPostInfo = styled('div', {
  fontSize: '1.2rem',
  marginBottom: '0.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
});

const BlogPostContent = styled('div', {
  fontSize: '1.2rem',
  marginBottom: '0.25rem',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
});

// need component that parses and inserts into tags
const BlogPost = (props) => {
  return (
    <BlogPostDiv>
      <BlogPostTitle>Title</BlogPostTitle>
      <BlogPostDate>07 Dec 2020</BlogPostDate>
      <BlogPostInfo>
        <span>{props.date}</span>
      </BlogPostInfo>
      <BlogPostContent>
        "Hello"
      </BlogPostContent>
    </BlogPostDiv>
  );
}

export default BlogPost;
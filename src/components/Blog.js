import React from 'react'
import BlogPost from './BlogPost'

const Blog = () => {

    return (
        <div>
            <h2>Recent Blog Posts</h2>
            <BlogPost 
                postTitle="Add Title Here"
                postDate="Sunday Nov 14, 2021"
                postAuthor="Name Info"
                postContent="Info Here"
            />
        </div>
    )
}

export default Blog

import Layout from './layout'
import Post from './post'

const Posts = ({ posts }) => {
    return (
        <div>
            {posts.map((post, key) => {
                return (
                    <Post.Excerpt key={key} post={post} />
                )
            })}
        </div>
    )
}

export default Posts

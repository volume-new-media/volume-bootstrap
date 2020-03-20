import Layout from './layout'
import Link from 'next/link'

import { Heading } from 'react-bulma-components';

const Post = ({ post }) => {
    return (
        <div>
            <pre>{JSON.stringify(post, null, 4)}</pre>
        </div>
    )
}

Post.Excerpt = ({ post }) => {
    return (
        <div>
            <Heading>
                <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                    <a>{post.title.rendered}</a>
                </Link>
            </Heading>
        </div>
    )
}

export default Post

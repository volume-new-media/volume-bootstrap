import { useRouter } from 'next/router'
import fetch from 'node-fetch'

import Layout from '../../components/layout'

const Post = ({ post }) => {
    const router = useRouter()
    if (router.isFallback) {
        return (
          <Layout title="Loading...">
            <pre style={{position: 'fixed', top: '50%', left: '50%'}}>Loading...</pre>
          </Layout>
        )
    }
    return (
      <Layout title={post.title.rendered}>
          <h2>Post</h2>
          <pre>{JSON.stringify(post, null, 4)}</pre>
      </Layout>
    )
}

export async function getStaticProps(context) {
    // /post/{id}
    const id = context.params.id

    // Call an external API endpoint to get posts.
    const res = await fetch(`https://headless-wordpress.lndo.site/wp-json/wp/v2/posts/${id}`)
    const post = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            post,
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }],
        fallback: true // Load posts from the server
    };
}

export default Post

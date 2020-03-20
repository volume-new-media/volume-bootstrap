// TODO fix setting API_URL from .env
// import getConfig from 'next/config'
import { useRouter } from 'next/router'
import fetch from 'node-fetch'

import Layout from '../../components/layout'
import Loading from '../../components/loading'
import Post from '../../components/post'

// const { publicRuntimeConfig } = getConfig()
// const { API_URL } = publicRuntimeConfig
const API_URL = 'https://volume-wp.lndo.site'

const PagePost = ({ post }) => {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <Loading />
        )
    }
    return (
        <Layout title={post.title.rendered}>
            <Post post={post} />
        </Layout>
    )
}

// PagePost.getInitialProps = async function(context) {
// // export async function getInitialProps(context) {
//     const { id } = context.query;
//     const res = await fetch(`${API_URL}/wp-json/wp/v2/posts/${id}`)
//     if(res.status !== 200) {
//       context.statusCode = res.status
//       context.end(res.statusText)
//     }

//     const post = await res.json()

//     return {
//       props: { post }
//     }
// }

export async function getStaticProps(context) {
    // Call an external API endpoint to get posts.
    const { id } = context.params;
    const res = await fetch(`${API_URL}/wp-json/wp/v2/posts/${id}`)
    if(res.status !== 200) {
      context.statusCode = res.status
      context.end(res.statusText)
    }

    const post = await res.json()

    return {
      props: { post }
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '0' } }],
        fallback: true // Load posts from the server
    };
}

export default PagePost

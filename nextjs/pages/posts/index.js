import getConfig from 'next/config'
import { useRouter } from 'next/router'
import fetch from 'node-fetch'

import Layout from '../../components/layout'
import Loading from '../../components/loading'
import Posts from '../../components/posts'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

const PagePosts = ({ posts }) => {
    const router = useRouter()
    if (router.isFallback) {
        return (
            <Loading />
        )
    }
    return (
        <Layout title="Posts">
            <Posts posts={posts} />
        </Layout>
    )
}

export async function getStaticProps(context) {
    // Call an external API endpoint to get posts.
    const res = await fetch(`${API_URL}/wp-json/wp/v2/posts`)
    if(res.status !== 200) {
      context.statusCode = res.status
      context.end(res.statusText)
    }

    const posts = await res.json()

    return {
      props: { posts }
    }
}

export default PagePosts

import { useRouter } from 'next/router'
import fetch from 'node-fetch'
import { GetStaticProps } from 'next'

const Post = ({ post }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <pre>Loading...</pre>
    }
    return (
        <pre>Post: {JSON.stringify(post, null, 4)}</pre>
    )
}

export const getStaticProps: GetStaticProps = async context => {
    // /post/{id}
    const id = context.params.id
    // const id: Number = 1

    // Call an external API endpoint to get posts.
    const res = await fetch(`https://headless-backend.lndo.site/wp-json/acf/v3/posts/${id}`)
    const post = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            post,
        },
    }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       { params: { id: 1 } },
//     ],
//     fallback: true,
//   }
// }
export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '1' } }],
        fallback: true // See the "fallback" section below
    };
}

// export const getServerSideProps: GetServerSideProps = async context => {
//     return {}
// }

export default Post

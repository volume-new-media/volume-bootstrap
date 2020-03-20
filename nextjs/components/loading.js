import Layout from './layout'

const Loading = ({ title = 'Loading...' }) => {
  return (
    <Layout title="Loading...">
        <pre style={{margin: '10%'}}>{title}</pre>
    </Layout>
  )
}

export default Loading

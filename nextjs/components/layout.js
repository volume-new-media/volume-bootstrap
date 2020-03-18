import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children, title = 'This is the default title' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{textAlign: 'center'}}>
        <nav>
          <ul style={{ listStyle: 'none' }}>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
      </header>

      <div className="container" style={{ width: '90%', margin:'0 auto'}}>

      {children}

      </div>

      <footer style={{textAlign: 'center'}}>{'I`m here to stay'}</footer>
    </div>
  )
}

export default Layout

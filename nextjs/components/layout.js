import Link from 'next/link'
import Head from 'next/head'

import { Navbar } from 'react-bulma-components';

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
            <Navbar
                color="info"
                fixed={undefined} // 'top', 'bottom'
                active={false}
                transparent={false}
            >
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" className="has-text-weight-bold">
                        <Link href="/">Next.js</Link>
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu >
                    <Navbar.Container>
                        <Navbar.Item><Link href="/">Home</Link></Navbar.Item>
                        <Navbar.Item href="/posts"><Link href="/posts">Posts</Link></Navbar.Item>
                        <Navbar.Item href="/about"><Link href="/about">About</Link></Navbar.Item>
                        <Navbar.Item href="/contact"><Link href="/contact">Contact</Link></Navbar.Item>
                        <Navbar.Item href="/bulma"><Link href="/bulma">Bulma</Link></Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </nav>
      </header>

      <main className="container">

      {children}

      </main>

      <footer className="has-text-centered">{'Footer'}</footer>
    </div>
  )
}

export default Layout

import Link from 'next/link'
import Head from 'next/head'

import { Box, Breadcrumb, Container, Hero, Heading, Section } from 'react-bulma-components';

const Layout = ({
    children,
    title = 'Title',
    subtitle = 'Subtitle',
    color = 'primary'
}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <nav>
                    <Box>
                        <Breadcrumb
                            separator={undefined} // 'arrow', 'dot', 'bullet', 'succeeds'
                            items={[
                                {
                                    name: 'Home',
                                    url: '/',
                                }, {
                                    name: 'Posts',
                                    url: '/posts',
                                }, {
                                    name: 'About',
                                    url: '/about',
                                }, {
                                    name: 'Contact',
                                    url: '/contact',
                                }, {
                                    name: 'Foundation UI',
                                    url: '/foundation',
                                }, {
                                    name: 'Bulma UI',
                                    url: '/bulma',
                                }, {
                                    name: 'Material UI',
                                    url: '/material',
                                },
                            ]}
                        />
                    </Box>
                </nav>
            </header>

            <Hero color={color}>
                <Hero.Body>
                    <Container>
                        <Heading>{title}</Heading>
                        <Heading subtitle size={3}>{subtitle}</Heading>
                    </Container>
                </Hero.Body>
            </Hero>

            <main className="container">
                <Section>
                    {children}
                </Section>

            </main>

            <footer className="has-text-centered">
                <Hero color="primary">
                    <Hero.Body>
                        <Container>
                            <Heading subtitle size={3}>{'Footer'}</Heading>
                        </Container>
                    </Hero.Body>
                </Hero>
            </footer>
        </div>
    )
}

export default Layout

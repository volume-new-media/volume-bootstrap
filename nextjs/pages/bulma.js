import React from 'react';

import Layout from '../components/layout'

import { Anchor } from 'react-bulma-components';
import { Box, Breadcrumb, Button } from 'react-bulma-components';
import { Card, Code, Columns, Container, Content, Control, Checkbox, CheckboxControlled } from 'react-bulma-components';
import { Dropdown } from 'react-bulma-components';
import { Element } from 'react-bulma-components';
import { Field, Footer, Form } from 'react-bulma-components';
import { Heading, Help, Hero } from 'react-bulma-components';
import { Icon, Image, Input, InputFile } from 'react-bulma-components';
import { Label, Level, List, Loader } from 'react-bulma-components';
import { Media, Menu, Message, Modal } from 'react-bulma-components';
import { Navbar, Notification } from 'react-bulma-components';
import { Pagination, Panel, Progress } from 'react-bulma-components';
import { Radio, RadioGroup } from 'react-bulma-components';
import { Section, Select, SelectControlled } from 'react-bulma-components';
import { Table, Tabs, Tag, Textarea, Til } from 'react-bulma-components';

const PageBulma = () => {
    const ref = React.createRef();

    // const state =  {
    //     email: '',
    //     name: '',
    //     password: '',
    //     comment: '',
    //     gender: '',
    //     question: undefined,
    //     termsAccepted: false,
    // }
    // const { email, name, password, comment, gender, question, termsAccepted } = Bulma.state

    return (
        <Layout title="React Bulma Contact Sheet">

            <Section>
                <h1 className="title">Box</h1>
                <Box
                paddingless={false}
                responsive={{
                    mobile: {
                        display: {
                            value: 'block'
                        },
                    },
                        tablet: {
                            display: {
                                value: 'flex'
                            },
                        },
                        desktop: {
                            display: {
                                value: 'inline-flex',
                                    only: true,
                            },
                        },
                        widescreen: {
                            display: {
                                value: 'inline-block',
                            },
                        },
                }}
                hide={{
                    tablet: {
                        hide: true,
                            only: true,
                    },
                        widescreen: {
                            hide: true,
                        },
                }}
                >
                    <Media>
                        <Media.Item renderAs="figure" position="left">
                            <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/128x128.png" />
                        </Media.Item>
                        <Media.Item>
                            <Content>
                                <p>
                                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                                    <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                                </p>
                            </Content>
                        </Media.Item>
                    </Media>
                </Box>
            </Section>

            <Section>
                <h1 className="title">Breadcrumbs</h1>
                <Box>
                    <Breadcrumb
                      separator={undefined} // 'arrow', 'dot', 'bullet', 'succeeds'
                      items={[
                        {
                          name: 'Bulma',
                          url: '#1',
                        }, {
                          name: 'Breadcrumb',
                          url: '#2',
                        }, {
                          name: 'Breadcrumb Types',
                          url: '#3',
                          active: true,
                        },
                      ]}
                    />
                </Box>
                <Box>
                    <Breadcrumb
                        renderAs={Anchor}
                        hrefAttr="href"
                        separator="arrow" // undefined, 'dot', 'bullet', 'succeeds'
                        items={[
                          {
                            name: 'Bulma',
                            url: '#1',
                          }, {
                            name: 'Breadcrumb',
                            url: '#2',
                          }, {
                            name: 'Breadcrumb Types',
                            url: '#3',
                            active: true,
                          },
                        ]}
                    />
                </Box>
                <Box>
                    <Breadcrumb
                        renderAs={Anchor}
                        hrefAttr="href"
                        separator="dot" // undefined, 'dot', 'bullet', 'succeeds'
                        items={[
                          {
                            name: 'Bulma',
                            url: '#1',
                          }, {
                            name: 'Breadcrumb',
                            url: '#2',
                          }, {
                            name: 'Breadcrumb Types',
                            url: '#3',
                            active: true,
                          },
                        ]}
                    />
                </Box>
                <Box>
                    <Breadcrumb
                        renderAs={Anchor}
                        hrefAttr="href"
                        separator="bullet" // undefined, 'dot', 'bullet', 'succeeds'
                        items={[
                          {
                            name: 'Bulma',
                            url: '#1',
                          }, {
                            name: 'Breadcrumb',
                            url: '#2',
                          }, {
                            name: 'Breadcrumb Types',
                            url: '#3',
                            active: true,
                          },
                        ]}
                    />
                </Box>
                <Box>
                    <Breadcrumb
                        renderAs={Anchor}
                        hrefAttr="href"
                        separator="succeeds" // undefined, 'dot', 'bullet', 'succeeds'
                        items={[
                          {
                            name: 'Bulma',
                            url: '#1',
                          }, {
                            name: 'Breadcrumb',
                            url: '#2',
                          }, {
                            name: 'Breadcrumb Types',
                            url: '#3',
                            active: true,
                          },
                        ]}
                    />
                </Box>
            </Section>

            <Section>
                <h1 className="title">Buttons</h1>
                <Button.Group>
                    <Button
                        fullwidth={true}
                        color="primary" // "Default","primary","info","danger","warning" "success","white","black","light","dark","link"
                        loading={false}
                        outlined={false}
                        inverted={false}
                        disabled={false}
                        text={false}
                        remove={false}
                        isStatic={false}
                        rounded={false}
                        onClick={undefined}
                        onMouseEnter={undefined}
                    >
                        Button
                    </Button>
                    <Button fullwidth={true}>Full width</Button>
                    <Button loading={true}>Loading</Button>
                    <Button outlined={true}>Outlined</Button>
                    <Button inverted={true}>Inverted</Button>
                    <Button disabled={true}>Disabled</Button>
                    <Button text={true}>Text</Button>
                    <Button remove={true}>Remove</Button>
                    <Button isStatic={true}>Static</Button>
                    <Button rounded={true}>Rounded</Button>
                    <Button>Default</Button>
                    <Button color="primary">Primary</Button>
                    <Button color="info">Info</Button>
                    <Button color="danger">Danger</Button>
                    <Button color="warning">Warning</Button>
                    <Button color="success">Success</Button>
                    <Button color="white">White</Button>
                    <Button color="black">Black</Button>
                    <Button color="light">Light</Button>
                    <Button color="dark">Dark</Button>
                    <Button color="link">Link</Button>
                </Button.Group>
                <Button.Group
                    hasAddons={false}
                    position={undefined} // centered, right
                    size="small" // 'medium', 'large'
                >
                    <Button
                        renderAs="span"
                        color="success"
                    >
                        Save changes
                    </Button>
                    <Button
                        renderAs="span"
                        color="info"
                    >
                        Save and continue
                    </Button>
                    <Button
                        renderAs="span"
                        color="danger"
                    >
                        Cancel
                    </Button>
                </Button.Group>
            </Section>

            <Section>
                <h1 className="title">Cards</h1>
                <Card>
                    <Card.Image size="4by3" src="https://bulma.io/images/placeholders/1280x960.png" />
                    <Card.Content>
                        <Media>
                            <Media.Item renderAs="figure" position="left">
                                <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/128x128.png" />
                            </Media.Item>
                            <Media.Item>
                                <Heading size={4}>John Smith</Heading>
                                <Heading subtitle size={6}>@johnsmith</Heading>
                            </Media.Item>
                        </Media>
                        <Content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#1">#css</a> <a href="#2">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </Content>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Header>
                        <Card.Header.Title>Title</Card.Header.Title>
                    </Card.Header>
                    <Card.Content>
                        <Media>
                            <Media.Item renderAs="figure" position="left">
                                <Image size={64} alt="64x64" src="https://bulma.io/images/placeholders/128x128.png" />
                            </Media.Item>
                            <Media.Item>
                                <Heading size={4}>John Smith</Heading>
                                <Heading subtitle size={6}>@johnsmith</Heading>
                            </Media.Item>
                        </Media>
                        <Content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a href="#1">#css</a> <a href="#2">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </Content>
                    </Card.Content>
                    <Card.Footer>
                        <Card.Footer.Item renderAs="a" href="#Yes">Yes</Card.Footer.Item>
                        <Card.Footer.Item renderAs="a" href="#No">No</Card.Footer.Item>
                        <Card.Footer.Item renderAs="a" href="#Maybe">Maybe</Card.Footer.Item>
                    </Card.Footer>
                </Card>
            </Section>

            <Section>
                <h1 className="title">Columns</h1>
                <Columns>
                    <Columns.Column>
                        <p className="bd-notification is-success">First Column</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Second Column</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-warning">Third Column</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-warning">Fourth Column</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="three-quarters">
                        <p className="bd-notification is-success">three-quarters</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Auto</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="two-thirds">
                        <p className="bd-notification is-success">two-thirds</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Auto</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="half">
                        <p className="bd-notification is-success">half</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Auto</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="one-third">
                        <p className="bd-notification is-success">one-third</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Auto</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="one-quarter">
                        <p className="bd-notification is-success">one-quarter</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Auto</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="one-fifth">
                        <p className="bd-notification is-success">one-fifth</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Auto</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="two-fifths">
                        <p className="bd-notification is-success">two-fifths</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Auto</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="three-fifths">
                        <p className="bd-notification is-success">three-fifths</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Auto</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="four-fifths">
                        <p className="bd-notification is-success">four-fifths</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info">Auto</p>
                    </Columns.Column>
                </Columns>
            </Section>
            <Section>
                <Columns>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-success">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-info">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-warning">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-black">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={2}>
                        <p className="bd-notification is-success">size-2</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-warning">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-black">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={3}>
                        <p className="bd-notification is-success">size-3</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-black">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={4}>
                        <p className="bd-notification is-success">size-4</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-black">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={5}>
                        <p className="bd-notification is-success">size-5</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-black">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={6}>
                        <p className="bd-notification is-success">size-6</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-black">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={7}>
                        <p className="bd-notification is-success">size-7</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-black">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={8}>
                        <p className="bd-notification is-success">size-8</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={9}>
                        <p className="bd-notification is-success">size-9</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={10}>
                        <p className="bd-notification is-success">size-10</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={11}>
                        <p className="bd-notification is-success">size-11</p>
                    </Columns.Column>
                    <Columns.Column size={1}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size={12}>
                        <p className="bd-notification is-success">size-12</p>
                    </Columns.Column>
                </Columns>
            </Section>

            <Section>
                <Columns mobile="true">
                    <Columns.Column size="half" offset="one-quarter">
                        <p className="bd-notification is-info">size half<br />offset one-quarter</p>
                    </Columns.Column>
                </Columns>
                <Columns mobile="true">
                    <Columns.Column size={4} offset={8}>
                        <p className="bd-notification is-info">size 4<br />offset 8</p>
                    </Columns.Column>
                </Columns>
                <Columns mobile="true">
                    <Columns.Column size={11} offset={1}>
                        <p className="bd-notification is-info">size 11<br />offset 1</p>
                    </Columns.Column>
                </Columns>
            </Section>

            <Section>
                <Columns>
                    <Columns.Column narrow>
                        <Box style={{ width: 200 }}>
                            <Heading size={5} renderAs="p">Narrow column</Heading>
                            <Heading subtitle renderAs="p">This column is only 200px wide.</Heading>
                        </Box>
                    </Columns.Column>
                    <Columns.Column>
                        <Box>
                            <Heading size={5} renderAs="p">Flexible column</Heading>
                            <Heading subtitle renderAs="p">This column will take up the remaining space available.</Heading>
                        </Box>
                    </Columns.Column>
                </Columns>
            </Section>

            <Section>
                <Box>
                    <Heading size={5} renderAs="p">Mobile</Heading>
                    <Columns breakpoint="mobile">
                        <Columns.Column>
                            <p className="bd-notification is-success">First Column</p>
                        </Columns.Column>
                        <Columns.Column>
                            <p className="bd-notification is-info">Second Column</p>
                        </Columns.Column>
                        <Columns.Column>
                            <p className="bd-notification is-warning">Third Column</p>
                        </Columns.Column>
                        <Columns.Column>
                            <p className="bd-notification is-warning">Fourth Column</p>
                        </Columns.Column>
                    </Columns>
                </Box>
                <Box>
                    <Heading renderAs="p" size={5}>Tablet</Heading>
                    <Columns breakpoint="tablet">
                        <Columns.Column>
                            <p className="bd-notification is-success">First Column</p>
                        </Columns.Column>
                        <Columns.Column>
                            <p className="bd-notification is-info">Second Column</p>
                        </Columns.Column>
                        <Columns.Column>
                            <p className="bd-notification is-warning">Third Column</p>
                        </Columns.Column>
                        <Columns.Column>
                            <p className="bd-notification is-warning">Fourth Column</p>
                        </Columns.Column>
                    </Columns>
                </Box>
                <Box>
                    <Heading renderAs="p" size={5}>Desktop</Heading>
                    <Columns breakpoint="desktop">
                        <Columns.Column>
                            <p className="bd-notification is-success">First Column</p>
                        </Columns.Column>
                        <Columns.Column>
                            <p className="bd-notification is-info">Second Column</p>
                        </Columns.Column>
                        <Columns.Column>
                            <p className="bd-notification is-warning">Third Column</p>
                        </Columns.Column>
                        <Columns.Column>
                            <p className="bd-notification is-warning">Fourth Column</p>
                        </Columns.Column>
                    </Columns>
                </Box>
            </Section>

            <Section>
                <Columns breakpoint="mobile">
                    <Columns.Column
                        mobile={{
                            size: 'three-quarters',
                        }}
                        tablet={{
                            size: 'two-thirds',
                        }}
                        desktop={{
                            size: 'half',
                        }}
                        widescreen={{
                            size: 'one-third',
                        }}
                        fullhd={{
                            size: 'one-quarter',
                        }}
                    >
                        <p className="bd-notification is-success">
                            is-three-quarters-mobile<br />
                            is-two-thirds-tablet<br />
                            is-half-desktop
                            is-one-third-widescreen
                            is-one-quarter-fullhd
                        </p>
                    </Columns.Column>
                    <Columns.Column className="column">
                        <p className="bd-notification is-info">1</p>
                    </Columns.Column>
                    <Columns.Column className="column">
                        <p className="bd-notification is-warning">1</p>
                    </Columns.Column>
                </Columns>
                <Columns>
                    <Columns.Column size="half">
                        <p className="bd-notification is-success">First Column</p>
                        <Columns>
                            <Columns.Column size="one-third">
                                <p className="bd-notification is-info">First Nested Column</p>
                            </Columns.Column>
                            <Columns.Column>
                                <p className="bd-notification is-warning">Second Nested Column (auto)</p>
                            </Columns.Column>
                        </Columns>
                    </Columns.Column>
                    <Columns.Column size="half">
                        <p className="bd-notification is-success">Second Column</p>
                        <Columns>
                            <Columns.Column size="half">
                                <p className="bd-notification is-info">First Nested Column (Half)</p>
                            </Columns.Column>
                            <Columns.Column size="one-quarter">
                                <p className="bd-notification is-warning">Second Nested Column (one-quarter)</p>
                            </Columns.Column>
                            <Columns.Column>
                                <p className="bd-notification is-warning">Third Nested Column (auto)</p>
                            </Columns.Column>
                        </Columns>
                    </Columns.Column>
                </Columns>
                <Columns gapless>
                    <Columns.Column>
                        <p className="bd-notification is-success"> First Column</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-info"> Middle Column</p>
                    </Columns.Column>
                    <Columns.Column>
                        <p className="bd-notification is-warning"> Last Column</p>
                    </Columns.Column>
                </Columns>
                <Columns variableGap={{ mobile: 1, tablet: 0, desktop: 3, widescreen: 8, fullhd: 2 }}>
                    <Columns.Column size={3}>
                        <p className="bd-notification is-dark">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={3}>
                        <p className="bd-notification is-light">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={3}>
                        <p className="bd-notification is-white">size-1</p>
                    </Columns.Column>
                    <Columns.Column size={3}>
                        <p className="bd-notification is-danger">size-1</p>
                    </Columns.Column>
                </Columns>
            </Section>

            <Section>
                <h1 className="title">Containers</h1>
                <Container>
                    <div className="bd-notification is-success">
                        <Heading size={5} renderAs="p">Default</Heading>
                        <Heading subtitle renderAs="p">Container</Heading>
                    </div>
                </Container>
                <Container fluid>
                    <div className="bd-notification is-info">
                        <Heading size={5} renderAs="p">Fluid</Heading>
                        <Heading subtitle renderAs="p">Container</Heading>
                    </div>
                </Container>
                <Container breakpoint="widescreen">
                    <div className="bd-notification is-warning">
                        <Heading size={5} renderAs="p">Breakpoint Widescreen</Heading>
                        <Heading subtitle renderAs="p">Container</Heading>
                    </div>
                </Container>
                <Container breakpoint="fullhd">
                    <div className="bd-notification is-danger">
                        <Heading size={5} renderAs="p">Breakpoint Fullhd</Heading>
                        <Heading subtitle renderAs="p">Container</Heading>
                    </div>
                </Container>
            </Section>

            <Section>
                <h1 className="title">Content</h1>
                <Content>
                    <h1>Hello World</h1>
                    <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                    <h2>Second level</h2>
                    <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                    <ul>
                        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                        <li>Ut non enim metus.</li>
                    </ul>
                    <h3>Third level</h3>
                    <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#link">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
                    <ol>
                        <li>Donec blandit a lorem id convallis.</li>
                        <li>Cras gravida arcu at diam gravida gravida.</li>
                        <li>Integer in volutpat libero.</li>
                        <li>Donec a diam tellus.</li>
                        <li>Aenean nec tortor orci.</li>
                        <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
                        <li>Vivamus maximus ultricies pulvinar.</li>
                    </ol>
                    <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
                    <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
                    <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
                    <dl>
                        <dt>Web</dt>
                        <dd>The part of the Internet that contains websites and web pages</dd>
                        <dt>HTML</dt>
                        <dd>A markup language for creating web pages</dd>
                        <dt>CSS</dt>
                        <dd>A technology to make HTML look better</dd>
                    </dl>
                    <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
                    <h4>Fourth level</h4>
                    <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
                    <pre>
                        &lt;!DOCTYPE html&gt;
                        &lt;html&gt;
                        &lt;head&gt;
                        &lt;title&gt;Hello World&lt;/title&gt;
                        &lt;/head&gt;
                        &lt;body&gt;
                        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.&lt;/p&gt;
                        &lt;/body&gt;
                        &lt;/html&gt;
                    </pre>
                    <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
                    <table>
                        <thead>
                            <tr>
                                <th>One</th>
                                <th>Two</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Three</td>
                                <td>Four</td>
                            </tr>
                            <tr>
                                <td>Five</td>
                                <td>Six</td>
                            </tr>
                            <tr>
                                <td>Seven</td>
                                <td>Eight</td>
                            </tr>
                            <tr>
                                <td>Nine</td>
                                <td>Ten</td>
                            </tr>
                            <tr>
                                <td>Eleven</td>
                                <td>Twelve</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
                    <h5>Fifth level</h5>
                    <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
                    <figure>
                        <img alt="256" src="https://bulma.io/images/placeholders/256x256.png" />
                        <img alt="other" src="https://bulma.io/images/placeholders/256x256.png" />
                        <figcaption>
                            Figure 1: Some beautiful placeholders
                        </figcaption>
                    </figure>
                    <h6>Sixth level</h6>
                    <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
                </Content>

                <Content size="small">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                    <h2>Second level</h2>
                    <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                    <ul>
                        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                        <li>Ut non enim metus.</li>
                    </ul>
                    <h3>Third level</h3>
                    <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#link">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
                    <ol>
                        <li>Donec blandit a lorem id convallis.</li>
                        <li>Cras gravida arcu at diam gravida gravida.</li>
                        <li>Integer in volutpat libero.</li>
                        <li>Donec a diam tellus.</li>
                        <li>Aenean nec tortor orci.</li>
                        <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
                        <li>Vivamus maximus ultricies pulvinar.</li>
                    </ol>
                    <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
                    <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
                    <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
                    <dl>
                        <dt>Web</dt>
                        <dd>The part of the Internet that contains websites and web pages</dd>
                        <dt>HTML</dt>
                        <dd>A markup language for creating web pages</dd>
                        <dt>CSS</dt>
                        <dd>A technology to make HTML look better</dd>
                    </dl>
                    <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
                    <h4>Fourth level</h4>
                    <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>
                    <pre>
                        &lt;!DOCTYPE html&gt;
                        &lt;html&gt;
                        &lt;head&gt;
                        &lt;title&gt;Hello World&lt;/title&gt;
                        &lt;/head&gt;
                        &lt;body&gt;
                        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.&lt;/p&gt;
                        &lt;/body&gt;
                        &lt;/html&gt;
                    </pre>
                    <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>
                    <table>
                        <thead>
                            <tr>
                                <th>One</th>
                                <th>Two</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Three</td>
                                <td>Four</td>
                            </tr>
                            <tr>
                                <td>Five</td>
                                <td>Six</td>
                            </tr>
                            <tr>
                                <td>Seven</td>
                                <td>Eight</td>
                            </tr>
                            <tr>
                                <td>Nine</td>
                                <td>Ten</td>
                            </tr>
                            <tr>
                                <td>Eleven</td>
                                <td>Twelve</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
                    <h5>Fifth level</h5>
                    <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>
                    <figure>
                        <img alt="256" src="https://bulma.io/images/placeholders/256x256.png" />
                        <img alt="other" src="https://bulma.io/images/placeholders/256x256.png" />
                        <figcaption>
                            Figure 1: Some beautiful placeholders
                        </figcaption>
                    </figure>
                    <h6>Sixth level</h6>
                    <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
                </Content>
            </Section>

            <Section>
                <h1 className="title">Dropdowns</h1>
                <Dropdown onChange={undefined} label="Dropdown">
                    <Dropdown.Item value="item" >
                        Dropdown item
                    </Dropdown.Item>
                    <Dropdown.Item value="other">
                        Other Dropdown item
                    </Dropdown.Item>
                    <Dropdown.Item value="active">
                        Active Dropdown item
                    </Dropdown.Item>
                    <Dropdown.Item value="other 2">
                        Other Dropdown item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item value="divider">
                        With divider
                    </Dropdown.Item>
                </Dropdown>

                <Dropdown hoverable value="item" label="Dropdown (Hoverable)">
                    <Dropdown.Item value="item" >
                        Dropdown item
                    </Dropdown.Item>
                    <Dropdown.Item value="other">
                        Other Dropdown item
                    </Dropdown.Item>
                    <Dropdown.Item value="active">
                        Active Dropdown item
                    </Dropdown.Item>
                    <Dropdown.Item value="other 2">
                        Other Dropdown item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item value="divider">
                        With divider
                    </Dropdown.Item>
                </Dropdown>
            </Section>

            <Section>
                <Container>
                    <Section size="large">
                        <Dropdown
                            right={false}
                            value="item"
                            up={false}
                            label="Dropdown (Large)"
                        >
                            <Dropdown.Item value="item" >
                                Dropdown item
                            </Dropdown.Item>
                            <Dropdown.Item value="other">
                                Other Dropdown item
                            </Dropdown.Item>
                            <Dropdown.Item value="active">
                                Active Dropdown item
                            </Dropdown.Item>
                            <Dropdown.Item value="other 2">
                                Other Dropdown item
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item value="divider">
                                With divider
                            </Dropdown.Item>
                        </Dropdown>
                    </Section>
                </Container>
            </Section>

            <Section>
                <h1 className="title">Elements</h1>
                <Element
                    paddingless={false}
                    responsive={{
                        mobile: {
                            display: {
                                value: 'block',
                            },
                            hide: {
                                value: true
                            }
                        },
                        tablet: {
                            display: {
                                value: 'flex'
                            },
                        },
                        desktop: {
                            display: {
                                value: 'inline-flex',
                                only: true,
                            },
                        },
                        widescreen: {
                            display: {
                                value: 'inline-block'
                            },
                        },
                    }}
                >
                    Custom Element to use Bulma helper
                </Element>
            </Section>

            <Section>
                <h1 className="title">Heros</h1>
                <Hero size="fullheight">
                    <Hero.Head renderAs="header" />
                    <Hero.Body />
                    <Hero.Footer>
                        <Footer>
                            <Container>
                                <Content style={{ textAlign: 'center' }}>
                                    <p>
                                        <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                                        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                                    </p>
                                </Content>
                            </Container>
                        </Footer>
                    </Hero.Footer>
                </Hero>
                <Hero color="primary" >
                    <Hero.Body>
                        <Container>
                            <Heading>
                                Hero title Primary
                            </Heading>
                            <Heading subtitle size={3}>
                                Subtitle
                            </Heading>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero color="danger" >
                    <Hero.Body>
                        <Container>
                            <Heading>
                                Hero title Danger
                            </Heading>
                            <Heading subtitle size={3}>
                                Subtitle
                            </Heading>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero color="info" >
                    <Hero.Body>
                        <Container>
                            <Heading>
                                Hero title Info
                            </Heading>
                            <Heading subtitle size={3}>
                                Subtitle
                            </Heading>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero color="primary" gradient >
                    <Hero.Body>
                        <Container>
                            <Heading>
                                Hero title Primary
                            </Heading>
                            <Heading subtitle size={3}>
                                Subtitle
                            </Heading>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero color="danger" gradient >
                    <Hero.Body>
                        <Container>
                            <Heading>
                                Hero title Danger
                            </Heading>
                            <Heading subtitle size={3}>
                                Subtitle
                            </Heading>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero color="info" gradient >
                    <Hero.Body>
                        <Container>
                            <Heading>
                                Hero title Info
                            </Heading>
                            <Heading subtitle size={3}>
                                Subtitle
                            </Heading>
                        </Container>
                    </Hero.Body>
                </Hero>
                <Hero color="primary" size="medium" >
                    <Hero.Body>
                        Medium
                    </Hero.Body>
                </Hero>
                <Hero color="info" size="large" >
                    <Hero.Body>
                        Large
                    </Hero.Body>
                </Hero>
                <Hero color="danger" size="fullheight" >
                    <Hero.Body>
                        FULL HEIGHT
                    </Hero.Body>
                </Hero>
                <Hero size="fullheight" color="primary" >
                    <Hero.Head renderAs="header">
                        <div className="bd-notification is-info">Header</div>
                    </Hero.Head>
                    <Hero.Body>
                        Body
                    </Hero.Body>
                    <Hero.Footer>
                        <div className="bd-notification is-danger">Footer</div>
                    </Hero.Footer>
                </Hero>
            </Section>

            <Section>
                <h1 className="title">Headings</h1>
                <Box>
                    <Heading>Title</Heading>
                    <Heading subtitle size={6}>Subtitle</Heading>
                </Box>
                <Box>
                    <Heading size={1}>Title</Heading>
                    <Heading subtitle size={3}>Subtitle</Heading>
                </Box>
                <Box>
                    <Heading size={2}>Title</Heading>
                    <Heading subtitle size={4} renderAs="h2">Subtitle</Heading>
                </Box>
                <Box>
                    <Heading size={3}>Title</Heading>
                    <Heading subtitle size={5} renderAs="h2">Subtitle</Heading>
                </Box>
                <Box>
                    <Heading size={4}>Title</Heading>
                    <Heading subtitle size={6} renderAs="h2">Subtitle</Heading>
                </Box>
            </Section>

            <Section>
                <h1 className="title">Icons</h1>
                <Icon icon="bars" color="info" />
                <Icon icon="angle-down" />
            </Section>

            <Section>
                <h1 className="title">Images</h1>
                <Table>
                    <thead>
                        <tr>
                            <th />
                            <th>Size</th>
                            <th>Image</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                            <td style={{ width: 100 }}>16</td>
                            <td style={{ width: 128 }}>
                                  <Image src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original" size={16} />
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <td />
                            <td style={{ width: 100 }}>24</td>
                            <td style={{ width: 128 }}>
                                  <Image src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original" size={24} />
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <td />
                            <td style={{ width: 100 }}>32</td>
                            <td style={{ width: 128 }}>
                                  <Image src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original" size={32} />
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <td />
                            <td style={{ width: 100 }}>48</td>
                            <td style={{ width: 128 }}>
                                  <Image src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original" size={48} />
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <td />
                            <td style={{ width: 100 }}>64</td>
                            <td style={{ width: 128 }}>
                                  <Image src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original" size={64} />
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <td />
                            <td style={{ width: 100 }}>96</td>
                            <td style={{ width: 128 }}>
                                  <Image src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original" size={96} />
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <td />
                            <td style={{ width: 100 }}>128</td>
                            <td style={{ width: 128 }}>
                                  <Image src="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552&format=original" size={128} />
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <td />
                            <td style={{ width: 100 }}>image</td>
                            <td style={{ width: 128 }}>
                                <Image rounded={false} src="https://bulma.io/images/placeholders/640x480.png" size="3by2" />
                            </td>
                            <td />
                        </tr>
                        <tr>
                            <td />
                            <td style={{ width: 100 }}>rounded</td>
                            <td style={{ width: 128 }}>
                                <Image rounded={true} src="https://bulma.io/images/placeholders/640x480.png" size="3by2" />
                            </td>
                            <td />
                        </tr>
                    </tbody>
                </Table>
                <div style={{ width: 320 }}>
                    <Image src="https://bulma.io/images/placeholders/640x480.png" size="3by2" />
                </div>
                <Image src="https://bulma.io/images/placeholders/640x480.png" size="3by2" />
            </Section>
            <Image src="https://bulma.io/images/placeholders/640x480.png" size="3by2" />

        <Section>
            <Navbar
                color={null}
                fixed={undefined} // 'top', 'bottom'
                active={false}
                transparent={false}
            >
                <Navbar.Brand>
                    <Navbar.Item renderAs="a" href="#">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu >
                    <Navbar.Container>
                        <Navbar.Item dropdown hoverable href="#">
                            <Navbar.Link arrowless={false}>First</Navbar.Link>
                            <Navbar.Dropdown>
                                <Navbar.Item href="#">Subitem 1</Navbar.Item>
                                <Navbar.Item href="#">Subitem 2</Navbar.Item>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                        <Navbar.Item href="#">Second</Navbar.Item>
                    </Navbar.Container>
                    <Navbar.Container position="end">
                        <Navbar.Item href="#">At the end</Navbar.Item>
                    </Navbar.Container>
                </Navbar.Menu>
            </Navbar>
        </Section>

        </Layout>
    )
}

export default PageBulma

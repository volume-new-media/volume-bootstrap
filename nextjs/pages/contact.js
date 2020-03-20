import Layout from '../components/layout'
import { useFormik } from 'formik';

import { Button, Container, Content, Columns, Hero, Heading, Section } from 'react-bulma-components';
import { Form } from 'react-bulma-components';
// import { Control, Field, Input, Label } from 'react-bulma-components/form';

const PageContact = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <Layout title="Contact" color="danger">
            <Content>
                <form onSubmit={formik.handleSubmit}>
                    <Columns>
                        <Columns.Column size="three-quarters">
                            <Form.Field>
                                <Form.Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className="is-large"
                                />
                            </Form.Field>
                        </Columns.Column>
                        <Columns.Column>
                            <Button
                                id="email"
                                name="email"
                                submit={true}
                                fullwidth={true}
                                color="danger"
                                className="is-large"
                            >
                                Submit
                            </Button>
                        </Columns.Column>
                    </Columns>
                </form>
            </Content>
        </Layout>
    )
}

export default PageContact

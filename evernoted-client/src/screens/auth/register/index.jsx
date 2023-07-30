import React, { Fragment } from 'react';
import Header from '../../../components/header/Header';
import RegisterForm from '../../../components/register/RegisterForm';
import { Column, Section, Container, Card } from 'rbx';
import "../../../styles/auth.scss";

const Register = () => {
    return (
        <Fragment>
            <Header />

            <Section size="large" className="auth">
                <Container>
                    <Column.Group centered>
                        <Column size={6}>
                            <Card>
                                <Card.Content>
                                    <RegisterForm/> 
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    );
}

export default Register;
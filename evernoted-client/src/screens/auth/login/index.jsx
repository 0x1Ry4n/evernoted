import React, { Fragment } from 'react';
import Header from "../../../components/header/Header";
import LoginForm from '../../../components/login/LoginForm';
import { Column, Section, Container, Card } from "rbx";
import "../../../styles/auth.scss";

const Login = () => {
    return (
        <Fragment>
            <Header />

            <Section size="large" className="auth">
                <Container>
                    <Column.Group centered>
                        <Column size={6}>
                            <Card>
                                <Card.Content>
                                    <LoginForm />
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    );
}

export default Login;
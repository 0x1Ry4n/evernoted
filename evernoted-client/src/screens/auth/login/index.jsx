import React, { Fragment } from 'react';
import Header from "../../../components/header/Header";
import LoginForm from '../../../components/login/LoginForm';
import { Column, Section, Title, Container, Card } from "rbx";
import "../../../styles/auth.scss";

const Login = () => {
    return (
        <Fragment>
            <Header />
            <Section size="medium" className="auth">
                <Container>
                    <Column.Group centered>
                        <Column size={3}>
                            <Card>
                                <Card.Content>
                                    <LoginForm/>
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>

            <Section>
                <Column.Group centered>
                    <Column size={12}>
                        {/* <img src={LogoImage} /> */}
                    </Column>
                </Column.Group>

                <Column.Group>
                    <Column size={12}>
                        <Title size={6} className="has-text-grey has-text-centered">
                            Your notes on the cloud
                        </Title>
                    </Column>
                </Column.Group>
            </Section>
        </Fragment>
    );
}

export default Login;
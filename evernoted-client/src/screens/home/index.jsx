import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Content } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faThumbsUp, faCloudUploadAlt, faLock } from '@fortawesome/free-solid-svg-icons'; // Import the icons you want to use
import { Link } from 'react-router-dom';
import Header from "../../components/header/Header";
import "../../styles/home.scss";

const Home = () => {
    return (
        <Fragment>
            <Section className="home" style={{ padding: '40px 0' }}>
                <Header />
                <Section size="medium" style={{ margin: '40px 0' }}>
                    <Container>
                        <Column.Group>
                            <Column style={{ margin: 'auto' }} size={5}>
                                <Title size={1} spaced style={{ color: 'white', textAlign: 'center', textShadow: '1px 2px 2px #7e83d6' }}>
                                    Create notes easily and access them whenever you want, on the cloud.
                                </Title>
                                <Title size={5} spaced className="has-text-gray" style={{ color: 'white'}} subtitle>
                                    With EverNoted, it's easier to organize your notes and visualize them easily. Your notes are securely saved in the cloud using MongoDB database and protected with JWT authentication.<br /><br />
                                    Try it! It's free 💸.
                                </Title>
                                <Link to="/register" className="button is-large is-custom-blue">
                                    <strong><FontAwesomeIcon icon={faSignIn} /> Register for Free Now</strong>
                                </Link>
                            </Column>
                        </Column.Group>
                    </Container>
                </Section>

                <Section size="medium" className="features" style={{ margin: '40px 0' }}>
                    <Container>
                        <Column.Group>
                            <Column size={4} style={{ margin: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '20px', backgroundColor: '#f8f8f8' }}>
                                <Title size={3} spaced className="has-text-info">
                                    <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: '10px' }} />
                                    Easy to Use
                                </Title>
                                <Title size={6} spaced style={{ color: '#383f6b' }}>
                                    EverNoted provides a simple and intuitive interface, making it effortless to create and organize your notes. Spend more time jotting down your thoughts and less time figuring out how to use the app.
                                </Title>
                            </Column>
                            <Column size={4} style={{ margin: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '20px', backgroundColor: '#f8f8f8' }}>
                                <Title size={3} spaced className="has-text-success">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} style={{ marginRight: '10px' }} />
                                    Cloud Storage
                                </Title>
                                <Title size={6} spaced style={{ color: '#383f6b' }}>
                                    Your notes are securely stored in the cloud, allowing you to access them from anywhere, on any device. Never worry about losing your important notes again.
                                </Title>
                            </Column>
                            <Column size={4} style={{ margin: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '20px', backgroundColor: '#f8f8f8' }}>
                                <Title size={3} spaced className="has-text-warning">
                                    <FontAwesomeIcon icon={faLock} style={{ marginRight: '10px' }} />
                                    Privacy and Security
                                </Title>
                                <Title size={6} spaced style={{ color: '#383f6b' }}>
                                    We take your privacy seriously. EverNoted uses industry-standard security measures to protect your data and ensures that only you can access your notes.
                                </Title>
                            </Column>
                        </Column.Group>
                    </Container>
                </Section>

                <Section size="medium" className="testimonials" style={{ margin: '40px 0' }}>
                    <Container>
                        <Title size={3} spaced className="has-text-info has-text-centered">
                            What our users are saying
                        </Title>
                        <Column.Group centered>
                            <Column size="half" style={{ margin: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '20px', backgroundColor: '#f8f8f8' }}>
                                <Title size={5} spaced className="has-text-gray" style={{ color: '#383f6b' }} subtitle>"EverNoted has completely transformed the way I organize my notes. It's so convenient to have everything accessible on the cloud."</Title>
                                <p className="testmonial-user-p">- John Doe</p>
                            </Column>
                            <Column size="half" style={{ margin: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '20px', backgroundColor: '#f8f8f8' }}>
                                <Title size={5} spaced className="has-text-gray" style={{ color: '#383f6b' }} subtitle>"I love how simple and user-friendly EverNoted is. It's now an essential tool for my daily note-taking."</Title>
                                <p className="testmonial-user-p">- Jane Smith</p>
                            </Column>
                        </Column.Group>
                    </Container>
                </Section>
                <Section style={{ margin: '40px 0' }}>
                    <Container>
                        <Content textAlign="centered">
                            <Title size={5} spaced style={{ color: 'white', textShadow: '1px 2px 2px #7e83d6' }} subtitle>
                                &copy; {new Date().getFullYear()} EverNoted. All rights reserved.
                            </Title>
                        </Content>
                    </Container>
                </Section>
            </Section>
        </Fragment>
    );
}

export default Home;

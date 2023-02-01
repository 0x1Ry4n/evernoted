import React, { Fragment } from 'react';
import { Column, Section, Title, Container } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Header from "../../components/header/Header";
import "../../styles/home.scss";


const Home = () => {
    return (
        <Fragment>
            <Header />

            <Section size="medium" className="home">
                <Container>
                    <Column.Group>
                        <Column size={5}>
                            <Title size={2} spaced className="has-text-custom-purple" style={{ textShadow: '1px 2px 2px #7e83d6' }}>
                                Create notes easily and access when you wants on the cloud
                            </Title>
                            <Title size={5} spaced className="has-text-gray" style={{ textShadow: '2px 2px 2px gainsboro'}} subtitle>
                                With evernoted it's easier to organize your notes and visualize them easily. Your notes are saved in the cloud through the MongoDB database and your account secured with JWT.<br /><br />
                                Try it! It's free 💸.
                            </Title>
                            <Link to="/register" className="button is-large is-custom-blue">
                                <strong><FontAwesomeIcon icon={faSignIn} /> Register for free Now</strong>
                            </Link>
                        </Column>
                        <Column size={5} offset={2} style={{ marginTop: '-80px' }}>
                            <img
                                src={Logo}
                                draggable="false"
                            />
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    );
}


export default Home; 
import React, { Fragment } from 'react';
import { Column, Section, Title, Container } from "rbx";
import { Link } from 'react-router-dom';
import Travolta from '../../assets/images/travolta-lost.gif';

const NotFound = () => {
    return (
        <Fragment>
            <Section size="medium" style={{ marginTop: '50px' }}>
                <Container>
                    <Column.Group>
                        <Column size={5}>
                            <img src={Travolta} width={400} style={{ borderRadius: '10px' }} />
                        </Column>
                        <Column size={5}>
                            <Title size={1} spaced className="has-text-custom-purple" style={{ fontSize: '60pt'}}>
                                404.
                            </Title>
                            <Title size={5} spaced className="has-text-custom-purple" subtitle style={{ fontSize: '25pt' }}>
                                Oops! You're lost
                            </Title>
                            <Title size={5} spaced className="has-text-custom-purple-darker" subtitle style={{ fontSize: '12pt', fontWeight: 'bold' }}>
                                The page you are looking for does not exist. How you got here is a mystery 🕵️. Click the link below to return home.
                            </Title>
                            <Link to='/' style={{ color: 'blue' }}>Back to the home :)</Link>
                        </Column>
                    </Column.Group>
                </Container>
            </Section>
        </Fragment>
    );
}

export default NotFound;
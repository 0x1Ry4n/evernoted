import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Navbar, Container, Column, Title } from 'rbx';
import "../../styles/header.scss";

const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Title size={3} spaced className="has-text-custom-purple" style={{ fontSize: '3.5vh', marginTop: '15px' }}>
                        Notes on <a href="/">☁️</a>
                    </Title>
                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu" active={openMenu.toString()}
                    onClick={() => setOpenMenu(!openMenu)}>
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        <Column.Group>
                            <Column>
                                <Link to="/register" className="button is-white has-text-custom-blue">Register</Link>
                            </Column>
                            <Column>
                                <Link to="/login" className="button is-custom-blue">Login</Link>
                            </Column>
                        </Column.Group>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    );
}

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, Column, Title } from 'rbx';
import "../../styles/header.scss";

const Header = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item href="#">
                    <Title size={3} style={{ marginLeft: '5px', fontStyle: 'italic'}}spaced className="has-text-custom-purple" >
                        Notes on <a href="/">☁️</a>
                    </Title>
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Segment align="end">
                    <Navbar.Item>
                        <Button.Group>
                            <Column>
                                <Link to="/register" className="button is-white has-text-custom-blue">Register</Link>
                                <Link to="/login" className="button is-custom-blue">Login</Link>
                            </Column>
                        </Button.Group>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    );
}

export default Header;
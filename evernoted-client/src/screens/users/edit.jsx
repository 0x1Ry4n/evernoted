import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Card, Button } from "rbx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import UserEditForm from '../../components/user/edit/EditUser';
import UserEditPassword from '../../components/user/edit/EditPassword';
import '../../styles/user.scss';
import HeaderLogged from '../../components/header/logged/HeaderLogged';
import UserDelete from '../../components/user/DeleteAccount';

const UserEdit = () => (
    <Fragment>
        <HeaderLogged />
        <Section size="medium" className="users">
            <Container>
                <Column.Group centered className="users-edit" breakpoint="mobile">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                        <FontAwesomeIcon icon={faUserCircle} /> Informações Pessoais
                        </Title>
                        <Card>
                            <Card.Content>
                                <UserEditForm />
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>

                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            <FontAwesomeIcon icon={faLock} /> Password
                        </Title>
                        <Card>
                            <Card.Content>
                                <UserEditPassword />
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
                <Column.Group centered>
                    <Column size={4} className="has-text-right">
                        <UserDelete />
                    </Column>
                </Column.Group>
            </Container>
        </Section>  
    </Fragment>
);

export default UserEdit;
import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Button, Field, Control, Input, Column, Section, Help, Label } from 'rbx';
import UserService from '../../services/userService';
import { Navigate } from 'react-router-dom';

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await UserService.register({ name: name, email: email, password: password });
            setRedirectToLogin(true);
        } catch (err) {
            setError(true);
        }
    }

    if (redirectToLogin)
        return <Navigate to={{ pathname: "/login" }} />

    return (
        <Fragment>
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small"><FontAwesomeIcon icon={faUser} /> Name:</Label>
                            <Control>
                                <Input
                                    type="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    name="name"
                                    placeholder="Input a name..."
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small"><FontAwesomeIcon icon={faEnvelope} /> E-mail:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    name="email"
                                    placeholder="Input a email..."
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small"><FontAwesomeIcon icon={faLock} /> Password:</Label>
                            <Control>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    name="password"
                                    placeholder="Input a password..."
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group>
                                    <Column>
                                        <a onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">Login or</a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Register</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger">Email or Password invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    );
}

export default RegisterForm; 
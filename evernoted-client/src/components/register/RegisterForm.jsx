import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Button, Field, Control, Input, Column, Icon, Help, Label } from 'rbx';
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
                <Column size={10}>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label><FontAwesomeIcon icon={faUser} /> Name:</Label>
                            <Control iconLeft iconRight>
                                <Input
                                    type="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    name="name"
                                    placeholder="Input a name..."
                                />
                                <Icon size="small" align="left">
                                    <FontAwesomeIcon icon={faUser} />
                                </Icon>

                            </Control>
                        </Field>
                        <Field>
                            <Label><FontAwesomeIcon icon={faEnvelope} /> E-mail:</Label>
                            <Control iconLeft iconRight>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    name="email"
                                    placeholder="Input a email..."
                                />
                                <Icon size="small" align="left">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </Icon>
                            </Control>
                        </Field>
                        <Field>
                            <Label><FontAwesomeIcon icon={faLock} /> Password:</Label>
                            <Control iconLeft iconRight>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    name="password"
                                    placeholder="Input a password..."
                                />
                                <Icon size="small" align="left">
                                    <FontAwesomeIcon icon={faLock} />
                                </Icon>
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group>
                                    <Column>
                                        <a onClick={e => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">Login or</a>
                                        <Button color="custom-purple" outlined>Register</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help size={12} color="danger">Email or Password invalid</Help>}
                    </form>
                </Column>
            </Column.Group>
        </Fragment>
    )
};

export default RegisterForm; 
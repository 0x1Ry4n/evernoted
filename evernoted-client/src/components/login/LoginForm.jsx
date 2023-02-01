import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Button, Field, Control, Input, Column, Icon, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";
import UserService from '../../services/userService';
import { ButtonGroup } from 'rbx/elements/button/button-group';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [RedirectToRegister, setRedirectToRegister] = useState(false);
    const [RedirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);

    if (RedirectToRegister)
        return <Navigate to={{ pathname: "/register" }} />
    else if (RedirectToNotes)
        return <Navigate to={{ pathname: "/notes" }} />

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await UserService.login({ email: email, password: password });
            setRedirectToNotes(true);
        } catch (error) {
            setError(true)
        }
    }

    return (
        <Fragment>
            <Column.Group centered>
                <Column size={10}>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label><FontAwesomeIcon icon={faEnvelope} /> E-mail</Label>
                            <Control iconLeft iconRight>
                                <Input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    placeholder="Input a email..."
                                    type="email"
                                />
                                <Icon size="small" align="left">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </Icon>

                            </Control>
                        </Field>
                        <Field>
                            <Label><FontAwesomeIcon icon={faLock} /> Password</Label>
                            <Control iconLeft iconRight>
                                <Input
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    placeholder="Input a password..."
                                    type="password"
                                />
                                <Icon size="small" align="left">
                                    <FontAwesomeIcon icon={faLock} />
                                </Icon>
                            </Control>
                        </Field>
                        <Field centered>
                            <ButtonGroup>
                                <Control>
                                    <Column.Group>
                                        <Column>
                                            <a onClick={e => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Register or</a>
                                            <Button color="custom-purple" outlined>Login</Button>
                                        </Column>
                                    </Column.Group>
                                </Control>
                            </ButtonGroup>
                        </Field>
                        {error && <Help size={12} color="danger">Email or Password invalid</Help>}
                    </form>
                </Column>
            </Column.Group>
        </Fragment>
    )
}

export default LoginForm;
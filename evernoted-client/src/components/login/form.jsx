import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Button, Field, Control, Input, Column, Section, Help, Label } from "rbx";
import { Navigate } from "react-router-dom";
import UserService from '../../services/user';

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
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small"><FontAwesomeIcon icon={faEnvelope} /> E-mail:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    name="email"
                                    placeholder="Enter a email..."
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
                                    placeholder="Enter a password..."
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group>
                                    <Column>
                                        <a onClick={e => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Register or</a>
                                    </Column>
                                    <Column>
                                        <Button color="custom-purple" outlined>Login</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger">Email or Password invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default LoginForm;
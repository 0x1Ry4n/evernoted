import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { Button, Field, Control, Input, Column, Help, Label } from 'rbx';
import UserService from '../../../services/userService';

const UserEditPassword = () => {
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [status, setStatus] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password === password_confirmation) {
            try {
                await UserService.updatePassword({ password: password });
                setStatus("success");
            } catch (err) {
                console.log(err);
                setStatus("error");
            }
        } else {
            setStatus("error_confirmation_password");
        }
    }


    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className="has-text-grey"><FontAwesomeIcon icon={faLockOpen} /> Password</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required    
                            name="password"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-grey"><FontAwesomeIcon icon={faLock} /> Password Confirmation</Label>
                        <Input
                            type="password"
                            value={password_confirmation}
                            onChange={e => setPasswordConfirmation(e.target.value)}
                            required
                            name="password_confirmation"
                        />
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <Column.Group>
                            <Column className="has-text-right">
                                <Button color="custom-purple" outlined>Update Password</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status === "error_update" &&
                    <Help color="danger">Problem in password update</Help>
                }
                {status === "error_confirmation_password" &&
                    <Help color="danger">Password don't match</Help>
                }
                {status === "success" &&
                    <Help color="primary">Updated with success</Help>
                }
            </form>
        </Fragment>
    )
}

export default UserEditPassword;
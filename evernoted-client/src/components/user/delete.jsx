import React, { useState } from 'react'; 
import { Button } from 'rbx'; 
import UserService from '../../services/user';
import { Navigate } from 'react-router-dom';

const UserDelete = () => {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm('Are you sure to delete this account?')) {
            UserService.delete();
            setRedirectToHome(true);
        } 
    }

    if (redirectToHome)  
        return <Navigate to={{pathname: "/"}} />

    return (
        <Button color="danger" onClick={() => deleteUser()}>
            Excluir Conta
        </Button>
    )

}

export default UserDelete;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/home';
import Login from './screens/auth/login';
import Register from './screens/auth/register';
import Notes from './screens/notes';
import UserEdit from './screens/users/edit';
import NotFound from './screens/404';

const RequireAuth = ({children}) => {
    let auth = localStorage.getItem('user'); 
    
    if (!auth)
        return <Navigate to='/login' />
    
    return children; 
}

const RouteMiddleware = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/notes' element={<RequireAuth><Notes/></RequireAuth>} />
                <Route exact path='/users/edit' element={<RequireAuth><UserEdit/></RequireAuth>} />
                <Route path='/404' element={<NotFound />} />
                <Route path='*' element={<Navigate replace to="/404" />} />
            </Routes>
        </Router>
    );
}


export default RouteMiddleware;

import React, { Fragment, useState } from 'react';
import "../../styles/notes.scss";
import HeaderLogged from '../../components/header/logged/HeaderLogged';
import Notes from '../../components/notes/Notes';


const NotesScreen = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Fragment>
            <HeaderLogged setIsOpen={setIsOpen}/>
            <Notes isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Fragment>
    );
}

export default NotesScreen; 
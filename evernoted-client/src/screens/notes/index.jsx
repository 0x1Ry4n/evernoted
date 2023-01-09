import React, { Fragment, useState } from 'react';
import { Column } from "rbx";
import "../../styles/notes.scss";
import HeaderLogged from '../../components/header/logged/logged';
import Notes from '../../components/notes';

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
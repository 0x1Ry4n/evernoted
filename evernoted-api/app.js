const express = require('express');
const path = require('path');
const cors = require('cors'); 
const logger = require('morgan');
require('./config/database');

const usersRouter = require('./app/routes/users');
const notesRouter = require('./app/routes/notes');

const port = 3030; 
const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;

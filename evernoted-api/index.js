const express = require('express');
const cors = require('cors'); 
const logger = require('morgan');
require('./config/database');

const usersRouter = require('./api/routes/users');
const notesRouter = require('./api/routes/notes');

const port = 3030; 
const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/notes', notesRouter); 

app.get('/', (req, res) => {
    res.send('Hi, evernoted API is running!')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;

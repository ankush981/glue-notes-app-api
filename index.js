// App and setup
require('dotenv').config();
const express = require('express');
require('express-async-errors');
require('./app/utils/dbConnect');

const app = express()

// Routes
const routes = require('./app/routes');
app.use('/users', routes.userRouter);
app.use('/notes', routes.notesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Ready for taking notes on port ${process.env.PORT}!`);
});
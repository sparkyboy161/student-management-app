const express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');

const usersRouter = require('./routes/api/users');
const coursesRouter = require('./routes/api/courses');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const db = mongoose.connection;

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);


app.listen(port, () =>
    console.log(`App listening on port ${port}!`));

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });

db.once('open', function () {
    console.log('Database connected successfully');
});

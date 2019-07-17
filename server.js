const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('./passport');

const routes = require('./routes');
const user = require('./routes/user');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// if in production, serve up React's build folder in the client subfolder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Sessions
app.use(
  session({
    secret: 'fraggle-rock',
    resave: true,
    saveUninitialized: true,
  }),
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);
app.use('/user', user);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ticket-tracker', { useNewUrlParser: true });

app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`); });
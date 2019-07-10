const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// if in production, serve up React's build folder in the client subfolder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ticket-tracker', { useNewUrlParser: true });

app.listen(PORT, () => { console.log(`App listening on PORT: ${PORT}`); });
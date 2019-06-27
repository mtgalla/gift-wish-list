const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  title: {type: String},
  authors: [String],
  description: {type: String, trim: true},
  link: {type: String, trim: true },
  image: {type: String, trim: true},
  date: {type: Date, default: Date.now}
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;

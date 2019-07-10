const router = require("express").Router();
const ticketRoutes = require("./tickets");

router.use("/tickets", ticketRoutes);

module.exports = router;

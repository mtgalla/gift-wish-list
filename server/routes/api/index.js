const router = require("express").Router();
const ticketRoutes = require("./tickets");

// Book routes
router.use("/tickets", ticketRoutes);

module.exports = router;

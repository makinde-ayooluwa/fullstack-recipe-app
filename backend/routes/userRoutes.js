const { Router } = require("express");
const { registerUser } = require("../controllers/userController");
const router = Router();
// Routes Declaration
router.route("/register").post(registerUser);
// Exports
module.exports = router;
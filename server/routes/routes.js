const express = require("express");
const router = express.Router();
const handleVerifyUser = require("../controllers/handleVerifyUser")


router.get("/", (req, res) => {
    res.send("Server running...")
})

// Login Verification
router.post("/verifyUser", handleVerifyUser);

module.exports = router;

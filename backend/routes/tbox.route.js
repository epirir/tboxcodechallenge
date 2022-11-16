const express = require("express");
const router = express.Router();
const tboxController = require("../controllers/tbox.controller");

router.get("/files/data", tboxController.getData);
router.get("/files/list", tboxController.getList);

module.exports = router;

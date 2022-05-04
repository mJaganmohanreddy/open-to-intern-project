const express = require('express');
const router = express.Router();
const CollegeController = require("../controllers/collegeController");
const InternController = require("../controllers/internControllers");
//const middlewares = require('../middlewares/auth');

router.post("/College",CollegeController.createCollege);
router.post("/InternCreate",InternController.CreateIntern);

module.exports = router;
const express = require('express');
const router = express.Router();
const CollegeController = require("../controllers/collegeController");
const InternController = require("../controllers/internControllers");
//const middlewares = require('../middlewares/auth');

router.post("/functionup/colleges",CollegeController.createCollege);
router.post("/functionup/interns",InternController.CreateIntern);
router.get("/functionup/collegeDetails",InternController.getdata);
module.exports = router; 
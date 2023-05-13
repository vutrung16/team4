const express = require('express');
const router = express.Router();


const homeController = require('../app/controllers/homecontroller');
//Chọc từ thằng con đến thằng cha nên '/' để dưới cùng
router.get('/',homeController.index);

//'/' cái path này coi như con của thằng new

module.exports = router;
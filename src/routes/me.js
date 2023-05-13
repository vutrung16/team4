const express = require('express');
const router = express.Router();


const meController = require('../app/controllers/mecontroller');
//Chọc từ thằng con đến thằng cha nên '/' để dưới cùng
router.get('/money/store',meController.CreateStore);

//'/' cái path này coi như con của thằng new

module.exports = router;
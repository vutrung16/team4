const express = require('express');
const router = express.Router();


const MoneyController = require('../app/controllers/moneycontroller');
//Chọc từ thằng con đến thằng cha nên '/' để dưới cùng
router.get('/create',MoneyController.create);
router.get('/:slug',MoneyController.show);
router.post('/store',MoneyController.store);
router.get('/:_id/edit',MoneyController.edit);
router.put('/:_id',MoneyController.update);
router.delete('/:_id',MoneyController.destroy);






module.exports = router;
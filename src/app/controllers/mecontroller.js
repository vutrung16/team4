const { response } = require('express');
const Money = require('../models/Money');
const {multipleMongooseToObject} = require('../../util/mongoose');


class MeController {
    
    CreateStore (req, res, next){
        Money.find({})
            .then((moneys) =>{
                res.render('./me/store-update',{
                    moneys : multipleMongooseToObject(moneys)
                })})
            .catch(next)
            }

}

module.exports = new MeController;
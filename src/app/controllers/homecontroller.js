const { response } = require('express');
const Money = require('../models/Money');
const {multipleMongooseToObject} = require('../../util/mongoose');


class homeController {
    
    //Home
    index (req, res, next){
        //Cách 2
        //Hàm find tìm tất cả các đối tượng trong database và trả lại mảng object qua then 
        Money.find({})
            .then((moneys) => {
                //toObject là để khắc phục lỗi khi mà this. không được (vì lỗi bảo mật)
                res.render('home', 
                {
                    moneys : multipleMongooseToObject(moneys)    
            }
            )}) 
            .catch(next);
        }
   
}

module.exports = new homeController;
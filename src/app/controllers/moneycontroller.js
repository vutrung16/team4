const { response } = require('express');
const Money = require('../models/Money');
const {MongooseToObject} = require('../../util/mongoose');

class MoneyController {

    // Tìm trong database xem cái nào có slug như thế rồi render ra show
    show (req, res, next){
        Money.findOne( {slug : req.params.slug})
            .then((money) => {
                res.render('./money/show-money', {
                    money : MongooseToObject(money),
                })})
            .catch(next);
    }

    create (req, res, next){
        res.render('./money/cre-money')
    }

     //course/id/edit
     edit (req, res, next){
        Money.findById(req.params._id )
            .then((money) =>{
                res.render('./money/edit-money',{
                    money : MongooseToObject(money)
                })})
            .catch(next)
    }
    
    // //update
    // //[PUT]/course/id
    update(req, res, next) {
        function calculateTotalMoney(money) {
            return money.NumberTeachHour * (money.ClassIsbn + money.TeacherIsbn + money.SubjectIsbn) * money.MoneyAHour;
        }
        Money.findOneAndUpdate({_id: req.params._id}, req.body)
          .then(() => {
            Money.findOne({_id: req.params._id})
              .then((updatedMoney) => {
                updatedMoney.TotalMoney = calculateTotalMoney(updatedMoney);
                return updatedMoney.save();
              })
              .then(() => {
                res.redirect('/me/money/store');
              })
              .catch(next);
          })
          .catch(next);
      }
      
     //[DELETE]/course/ID
     destroy (req, res, next){
        Money.delete({_id : req.params._id})
            .then(() =>{
                res.redirect('back')    
            })
            .catch(next)
    }

    //store lưu dữ liệu vào database
    store (req, res, next){
        const money = new Money(req.body);
        money.save()
        .then((money) => {
            res.render('./money/show-money', {
                money : MongooseToObject(money),
            })})
        .catch(next);
        }

     
   
}

module.exports = new MoneyController;
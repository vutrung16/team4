const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Money = new Schema({
    // Thông tin về giáo viên
    NameTeacher: String,
    Diploma: String,
    MaTeacher : String,
    NumberTeachHour: Number,
    
    //Thông tin lớp học
    nameClass : String,
    MaClass : String,
    NameSubject : String,
    NumberStudent: Number,

    //Thông tin hệ số
    MoneyAHour: Number,
    ClassIsbn : Number,
    SubjectIsbn : Number,
    TeacherIsbn : Number,
    TotalMoney :  Number,

    slug : {type: String, slug : 'NameSubject', unique: true},
  },
  {
    timestamps : true,
  }
  );

  Money.pre('save', function(next) {
    this.TotalMoney = this.NumberTeachHour * (this.ClassIsbn + this.TeacherIsbn + this.SubjectIsbn) * this.MoneyAHour;
    next();
  });
// Unique : true để mặc định chỉ có 1 slug thôi để không bị trùng slug
// định nghĩa các trường như name , description , createdAt , updatedAt vì nếu không định nghĩa 
// Khi mà lưu vào database chỉ các trường được định nghĩa mới được lưu vào database
// Các trường không được định nghĩa sẽ không được lưu


Money.plugin(mongooseDelete,  { 
      deletedAt : true ,
      overrideMethods: 'all' ,
    });
//DeleteAt để lưu lại thời gian mà xóa ở trong database
//Override để loại trừ các dữ liệu có delete= true , chỉ hiển thị ra dữ liệu không có delete= true

module.exports = mongoose.model('Money', Money);
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');

var methodOverride = require('method-override');

const db = require('./config/db');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')));
//có nghĩa đường dẫn http://localhost:3000 là public còn /img/logo.png là cái chứa cái logo

app.use(express.urlencoded());
//miiddle wer để xử lí form-data

app.use(express.json());
//Xử lí lối khi  body-parser
// Từ phiên bản expess 4 trở lên đã tích hợp body parser

app.use(methodOverride('_method'));


app.engine('hbs', 
      engine({
      extname: 'hbs',
      helpers : {
        sum : (a, b) => a + b,
      }
}));
//helpers để thực hiện phép tính và ở đây cấu hình theo express handlebars 
// Thực chất cũng chỉ là cấu hình khác của theo Handlebars

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
//chỉ cần cách nhau là dấu phảy và tự động sẽ thêm dấu \

// console.log(`PATH: `,path.join(__dirname, 'resources/views'))
// console.log(`PATH: `,path.join(__dirname))


//Route init
route(app);
db.connect();


app.listen(port, () => 
  console.log(`App listening at http://localhost:${port}`)
)


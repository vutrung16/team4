const meRouter = require('./me');
const homeRouter = require('./home');
const moneyRouter = require('./money');



function route(app){

    app.use('/me',meRouter);
    app.use('/',homeRouter);
    app.use('/money',moneyRouter);


    


}

module.exports = route;


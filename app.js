const express = require("express");
const app = express();
const createError = require("http-errors");
const path = require('path');

const port = 3000;

const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');

//View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Routing
app.use("/", indexRouter);
app.use("/new", newRouter);

//Catch 404
app.use(function(req, res, next) {
    next(createError(404))
});
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// })

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log("App listening on port")
})



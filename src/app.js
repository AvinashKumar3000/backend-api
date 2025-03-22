const express = require("express");
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');

const app = express();

// middle
app.use(express.json());


// event loop
app.use('/user', userRouter);
app.use('/product', productRouter);

app.get('/*',(req,res) => {
	res.send("404 not found, url is wrong.")
});

module.exports = app;
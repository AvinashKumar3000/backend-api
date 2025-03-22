const express = require("express");

const productRouter = express.Router();

function m1(req,res,next) {
    console.log("m1 middle ware....");
    next();
} 
function m2(req,res,next) {
    console.log("m2 middle ware....");
    next();
} 
function m3(req,res,next) {
    console.log("m3 middle ware....");
    next();
} 

productRouter.get("/",[m1,m2,m3], (req, res) => {
  res.send("GET /product 🏃‍♂️");
});

productRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`GET /product/${id}`);
});

module.exports = productRouter;

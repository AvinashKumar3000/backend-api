const express = require('express');

const userRouter = express.Router();

function roleAuth(req,res,next) {
    if(req.method === 'POST') {
        const { role } = req.body;
        if(role !== 'admin') {
            res.status(401).json({ message: "Unauthorized access" });
            return;
        }
    }
    req.body;
    next();
}

function myIntermediator(req,res,next) {
    console.log("My intermediator....", req.name);
    next();
}

userRouter.use(roleAuth, myIntermediator);

userRouter.post('/create/:name/:id', (req, res, next) => {
    console.log(req.query);
    const msg = `the values are: ${req.params.name} ${req.params.id}`;
    res.json({ message: msg, userId: "123" });
});

module.exports = userRouter;
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
    next();
}

userRouter.use(roleAuth);


userRouter.post('/create', (req, res) => {
    res.json({ message: "User created successfully", userId: "123" });
});


module.exports = userRouter;
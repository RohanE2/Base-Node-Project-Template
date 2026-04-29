import express from 'express';

const router = express.Router();

router.get('/info',(req,res) =>{
    return res.json({
        msg: "coming from v2 API",
    });
});

export default router;

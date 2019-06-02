const express = require('express');
const router = express.Router();
const course = require('../models/Course');

router.post('/insert',(req,res)=>{
    const courseModel = new course(req.body);
    courseModel.save().then(
        data => {
            return res.status(200).json(data);
        },
        err => {
            return res.status(400).json(err);
        }
    ).catch(
        err => {
            return res.status(400).json(err);
        }
    )
});

router.get('/',function(req,res){
    course.find().then(
        data => {
            return res.status(200).json(data);
        },
        err => {
            return res.status(400).json(err);
        }
    ).catch(
        err => {
            return res.status(400).json(err);
        }
    )
});

module.exports = router;
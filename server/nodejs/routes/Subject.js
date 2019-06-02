const express = require('express');
const router = express.Router();
const subject = require('../models/Subject');

router.post('/insert', (req,res) => {
    const subjectModel = new subject(req.body);
    subjectModel.save().then(
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

router.get('/', function(req,res){
    subject.find().then(
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

router.get('/find/:id', (req,res) => {
    subject.findById(req.params.id).then(
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
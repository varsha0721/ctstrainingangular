const express = require('express');
const router = express.Router();
const Employee = require('../models/employe');

router.get('/', (req, res) => {
    res.status(200).json({
        error: false,
        message: 'get all employees from api'
    });
});

// get by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);

    res.status(200).json({
        error: false,
        message: 'get employees' + id
    });
});

// Employee.find().them().catch()
router.get("/mongo", async (req, res) => {
    const employees = await Employee.find();

    try {
        res.status(200).json({
            error: false,
            data: employees
        });
    } catch (err) {
        res.status(400).json({
            error: true,
            message: "djfskd"
        });
    }
});

router.post('/', (req, res) => {
    res.status(201).json({
        error: false,
        message: 'post all employees'
    });
});

router.post('/mongo', async (req, res) => {
    const emp = req.body;
    const doc = await Employee.create(emp)

    try {
        res.status(201).json({
            error: false,
            data: doc
        })
    } catch (err) {
        res.status(400).json({
            error: true,
            message: err.message
        })
    }
});

router.put('/', (req, res) => {
    res.status(200).json({
        error: false,
        message: 'put all employees'
    });
});

router.put('/mongo/:id', async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!employee) {
        res.status(404).json({
            error: true,
            message: 'employee id does not exist'
        });
    }

    try {
        res.status(200).json({
            error: false,
            data: employee
        })
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }
})

router.delete('/', (req, res) => {
    res.status(200).json({
        error: false,
        message: 'delete all employees'
    });
});


module.exports = router;
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Faculty = require('./Faculty');
require('dotenv').config();

const connectionString = "mongodb+srv://"+process.env.UN+":"+process.env.Pass+"@cluster0.7mv6j.mongodb.net/Practice";


mongoose.connect(connectionString).then(() => {
    console.log("database connected");
    const app = express();
    app.use(bodyParser.urlencoded());
    // get all 
    app.get('/faculties', async (req, res) => {
        const ans = await Faculty.find().sort({ FacId: 1 });
        res.send(ans);
    });

    // get by Id
    app.get('/faculties/:id', async (req, res) => {
        const ans = await Faculty.findOne({ FacId: req.params.id });
        // console.log("ans = " + ans);
        res.send(ans);
    });

    //Create
    app.post('/faculties', async (req, res) => {
        const fac = new Faculty({ ...req.body });
        const ans = await fac.save();
        res.send(ans);
    });

    // Delete
    app.delete('/faculties/:id', async (req, res) => {
        const ans = await Faculty.deleteOne({ FacId: req.params.id });
        res.send(ans);
    });

    // Update
    app.patch('/faculties/:id', async (req, res) => {
        const fac = await Faculty.findOne({ FacId: req.params.id });

        fac.name = req.body.name;
        const ans = await fac.save();
        res.send(ans);
    });


    app.listen(process.env.PORT, () => { console.log("server started at = " + process.env.PORT); });
}); 
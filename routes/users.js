const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    }catch(err) {
       return res.send('Error' + err)
    }
})

// Get user by id
router.get('/users/:_id', async (req, res) => {
    
    try{
        const user = await User.findById(req.params._id);
        res.send(user);
    }catch(err) {
        res.send(err);
    }
})

// Add new user
router.post('/users', async (req, res) => {
    const {firstName, lastName, age, gender, tech} = req.body;
    try{
    const user = new User({firstName, lastName,age, gender, tech});
    await user.save();
    res.send(user);
    } catch (err) {
        res.send(err);
    }
})

// Update a user
router.patch('/users/:_id', async (req, res) => {
    try {
        const { firstName, lastName, age, gender, tech } = req.body;
        const user = await User.findById(req.params._id);
        if(firstName) {
            user.firstName = firstName
        }
        if(lastName) {
            user.lastName = lastName
        }
        if(age) {
            user.age = age
        }
        if(gender) {
            user.gender = gender
        }
        if(tech) {
            user.tech = tech
        }

        await user.save();
        res.send(user);
    } catch (err) {
        res.send(err);
    }
})

//Delete a user
router.delete('/users/:_id', async (req, res) => {
    try{
        const user = await User.findById(req.params._id);
        await user.remove();
        res.send('User removed');
    } catch (err) {
        res.send('Error' + err);
    }
})

module.exports = router;
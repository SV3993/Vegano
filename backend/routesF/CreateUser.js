const express = require("express");
const Router = express.Router();

const user = require("../model/User");
const { body, validationResult } = require('express-validator');

const bcrypt=require('bcrypt');
const jwt= require("jsonwebtoken");
const jwtSecret="ThisIsMyFirstMernApplicationMadeInAuspiciousMonthOfDiwali";

Router.post("/createuser",
    //Validator
    [
        body('email').isEmail(),
        body('name').isString(),
        body('password').isLength({ min: 5 })
    ],

    async (req, resp) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
        }

        const salt=await bcrypt.genSalt(10);
        const hashVal=await bcrypt.hash(req.body.password,salt);

        try {
            await user.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: hashVal
            })
            resp.json({ success: true });
        }
        catch (error) {
            console.log(error);
            resp.json({ success: false });
        }
    });

Router.post("/loginuser",
    //Validator
    [
        body('email').isEmail(),
        body('password').isLength({ min: 5 })
    ],

    async (req, resp) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return resp.status(400).json({ errors: errors.array() });
        }
        let email=req.body.email;
        try {
            let userData = await user.findOne({email});
            if (!userData) {
                return resp.status(400).json({ errors: "Invalid Credentials" });
            }

            const pwdCompare= await bcrypt.compare(req.body.password,userData.password);
            if (!pwdCompare) {
                return resp.status(400).json({ errors: "Invalid Credentials" });
            }

            const data={
                user:{
                    id:userData.id
                }
            };
            const authToken=jwt.sign(data,jwtSecret);

            return resp.json({ success: true,authToken:authToken });
        }
        catch (error) {
            console.log(error);
            resp.json({ success: false });
        }
    });

module.exports = Router;
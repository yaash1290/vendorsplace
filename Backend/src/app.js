const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

require("./db/conn")
const RegisterCustomer = require("./models/registerCustomer");
const RegisterFarmer = require("./models/registerFarmer");

const static_path = path.join(__dirname, '../../');
app.use(express.static(static_path))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
})

app.post("/registerCustomer", async (req, res) => {
    try {
        const customer = new RegisterCustomer(req.body);

        if (customer.Password != customer.ConfirmPassword) {
            res.status(400).send("Password and Confirm Password do not match")
        }
        else {
            await customer.save().then(() => {
                res.sendFile('login.html', { root: static_path });
            }).catch((err) => {
                console.log(err)
                res.status(400).send(err)
            })
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
})
app.post("/registerFarmer", async (req, res) => {
    try {
        const farmer = new RegisterFarmer(req.body);
        // console.log(farmer.Email)
        // console.log(farmer.Password)
        if (farmer.Password != farmer.ConfirmPassword) {
            res.status(400).send("Password and Confirm Password do not match")
        }
        else {
            await farmer.save().then(() => {
                res.sendFile('login.html', { root: static_path });
            }).catch((err) => {
                console.log(err)
                res.status(400).send(err)
            })
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
})
app.post("/login", async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const customer = await RegisterCustomer.findOne({ Email: Email });
        const farmer = await RegisterFarmer.findOne({ Email: Email });
        if (customer) {
            if (customer.Password == Password) {
                res.sendFile('index.html', { root: static_path });
            }
            else {
                res.status(400).send("Password is incorrect")
            }
        }
        else if (farmer) {
            if (farmer.Password == Password) {
                res.sendFile('index.html', { root: static_path });
            }
            else {
                res.status(400).send("Password is incorrect")
            }
        }
        else {
            res.status(400).send("Email not registered")
        }
    }
    catch (err) {
        res.status(400).send(err)
    }
})
app.listen(port, () => {
    // console.log(static_path)
    console.log('Backend app listening on port 3000!');
})
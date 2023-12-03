const express = require('express');
const app = express();
app.use(express.json()); //middleware
const users = [
    {
        "id": 1,
        "name": "Ayesha Iqbal",
        "email": "ayesha.iqbal@example.com",
        "address": "House No. 12, Street No. 5, Lahore"
    },
    {
        "id": 2,
        "name": "Bilal Hussain",
        "email": "bilal.hussain@example.com",
        "address": "Flat No. 3, Block B, Karachi"
    }
];

app.get('/', function (req, res) {
    res.send("My home page")
})

app.get('/api/users', (req, res) => {
    res.send(users);
})
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user)
        return res.status(400).send("User not found");
    res.status(200).send(user);
})
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user)
        return res.status(400).send("User not found");
    const { name, email, address } = req.body
    user.name = name;
    user.email = email;
    user.address = address;
    res.status(200).send(user);
})
app.delete('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1)
        return res.status(400).send("User not found");
    users.splice(index, 1);
    res.status(200).send(`user with id ${req.params.id} successfully deleted`);
})
app.post('/api/users', (req, res) => {
    const { name, email, address } = req.body;
    const user = {
        id : users.length+1,
        name ,
        email, 
        address
    };

    users.push(user);
    res.status(200).send(user);
})

app.listen(8000)





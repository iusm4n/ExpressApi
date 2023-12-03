const express = require('express');
const app = express();
app.use(express.json()); //middleware
const users = ['izhar', 'muaaz', 'usman'];

app.get('/', function (req, res) {
    res.send("My home page")
})

app.get('/api/users', (req, res) => {
    res.send(users);
})
app.get('/api/users/:id', (req, res) => {
    if (!users[req.params.id])
        return res.status(400).send("User not found");
    res.status(200).send(users[req.params.id]);
})
app.put('/api/users/:id', (req, res) => {
    if (req.params.id >= users.length || req.params.id < 0)
        return res.status(400).send("User not found");
    users[req.params.id] = req.body.name;
    res.send(users[req.params.id]);
})
app.delete('/api/users/:id', (req, res) => {
    if (req.params.id >= users.length || req.params.id < 0)
        return res.status(400).send("User not found");
    users.splice(req.params.id, 1);
    res.send(users);
})
app.post('/api/users', (req, res) => {
    users.push(req.body.name);
    res.send(users);
})

app.listen(8000)





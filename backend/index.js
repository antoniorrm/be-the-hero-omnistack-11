const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({ evento: 'Go Week 11', aluno: "Antonio R"});
});

app.listen(3333);
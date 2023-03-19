const fs = require("fs");
const cors = require("cors");
const express = require("express");
const { PythonShell } = require('python-shell');

const PORT = 80;
const app = express();

app.use(cors());
app.use(express.json());


app.post('/python', (req, res) => {
    fs.writeFileSync('test.py', req.body.code);
    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: [4,4,8],
    };
    PythonShell.run('test.py', options, function (err, results) {
        if(err) throw err;
        // results is an array consisting of messages collected during execution 
        console.log('results: %j', results);
        res.json({ passOrFail: results[0] });
    });
    
});

app.listen(PORT,() => {
    console.log(`Server listening on ${PORT}`);
});
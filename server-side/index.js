const fs = require("fs");
const cors = require("cors");
const { spawn } = require("child_process");
const express = require("express");
const { PythonShell } = require('python-shell');

const PORT = 3000;
const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200 
  }));
  
app.use(express.json());

app.options('*', cors({
    origin: 'http://localhost:5173', 
    optionsSuccessStatus: 200  
  }));
  

app.post('/python', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    var dataToSend;
    const args1 = ['4'];
    const args2 = ['4'];
    const args3 = ['8'];
    fs.writeFileSync('test.py', req.body.code);
    const py = spawn('python', ['test.py',args1, args2, args3]);

    py.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
       });
    
    py.stderr.on('data', function (data) {
    console.error(`stderr: ${data}`);
    });

    py.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // I'm sending the code data to browser
    console.log(dataToSend);
    res.json({passOrFail:dataToSend});
    });
    
});

app.listen(PORT,() => {
    console.log(`Server listening on ${PORT}`);
});
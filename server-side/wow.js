const { PythonShell } = require('python-shell');

PythonShell.runString('x=1+1;print(x)', null).then(messages=>{
    console.log('finished');
  });



arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr[1]);
  
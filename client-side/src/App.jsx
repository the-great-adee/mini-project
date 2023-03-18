import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/dracula.css";
  
function App() {
  const [code, setCode] = useState('import sys;\ndef add(a, b):\n    return a + b\nif __name__ == "__main__":\n    a = int(sys.argv[1])\n    b = int(sys.argv[2])\n    result = int(sys.argv[3])\n    print(add(a, b) == result)'); 
const submitCode = () => {
  axios
      .post("http://localhost:80/python", { code })
      .then(({ data }) => console.log(data));
  console.log(code);
};

  return (
    <div className="App">
      <header className="App-header">
        <div className="absolute top-20 bottom-40 left-10 right-10 text-left">
          <div>
            1. Create a function that adds two numbers in Python
          </div>
        <CodeMirror
        value = {code}
        options = {{
          theme: "dracula",
          keyMap: "sublime",
          mode: "Python"  
        }}
        onChange={(editor, change) => {
          setCode(editor);
        }}      
        />
        <div className='border-2 bg-green-500' onClick={submitCode}>
          Submit
        </div>
        </div>
      </header>
    </div>
  )
};
export default App;


/*
def add(a, b):
  return a + b
*/
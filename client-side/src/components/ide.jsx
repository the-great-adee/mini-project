import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/keymap/sublime";
import "codemirror/theme/dracula.css";
import HeadNavBar from './head-nav-bar';
import FootNavBar from './foot-nav-bar';
import Problem from './problem';
const Ide= ()=> {
    const [code, setCode] = useState('import sys\ndef add(a, b):\n    return a + b\nif __name__ == "__main__":\n    a = int(sys.argv[1])\n    b = int(sys.argv[2])\n    result = int(sys.argv[3])\n    print(add(a, b) == result)'); 
    const [testCases, setTestCases] = useState([]);
  const submitCode = () => {
    axios
        .post("http://localhost:3000/python", { code }, { headers: { 'Content-Type': 'application/json' } })
        .then(({ data }) => 
        {
          setTestCases(data.passOrFail);
          console.log(data);
          if(data.passOrFail === 'True\r\n')
          {
            alert('✅ passed');
          }
          else
          {
            alert('❌ failed');
          }
        }
          );
    console.log(code);
  }; 
    return (
      <>
        <HeadNavBar />
        <Problem/>
      <div className="App">
        <header className="App-header">
          <div className="absolute top-30 bottom-60 right-10 text-left w-6/12">
            <div className='text-lg'>
                1. Create a function that adds two numbers in Python          
            </div>
            <CodeMirror
              value={code}
              options={{
                theme: "dracula",
                keyMap: "sublime",
                mode: "python"
              }}
              onChange={(editor, change) => {
                setCode(editor);
              } } />
            <div className='border-2 bg-green-500' onClick={submitCode}>
              Submit
            </div>
          </div>
        </header>
      </div>
      </>
      
    )
  };


export default Ide;
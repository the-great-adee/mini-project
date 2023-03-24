import React from 'react'
import HeadNavBar from './head-nav-bar'
import FootNavBar from './foot-nav-bar'
import Ide from './ide'

const Answer = () => {
  return (
    <>
    <HeadNavBar />
    <h2 class="text-4xl font-extrabold dark:text-black relative left-96 top-44 pb-6">Solution</h2>
    <div className='bg-slate-700 text-white rounded-lg border-solid border-2 border-sky-500 w-1/4 mt-44 ml-96 p-10'>
            import sys
        <br/>
            def add(a, b):
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;return a + b
        <br/>

        if __name__ == "__main__":
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;a = int(sys.argv[1])
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;b = int(sys.argv[2])
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;result = int(sys.argv[3])
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;print(add(a, b) == result)
        <br/>
    </div>
    </>
  )
}

export default Answer
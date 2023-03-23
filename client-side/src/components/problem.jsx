import React from 'react'

const Problem = () => {
  return (
    <>
    <div className='leading-10 w-1/4 m-12 rounded-md border-zinc-800'>
    <div className='text-3xl leading-loose'>
       Problem
    </div>
    <div className='text-lg leading-relaxed'>
        Problem Statement
    </div>
    <div className='text-base mb-3'>
    The task is very simple: given two integers A and B, write a program to add these two numbers and output it.
    </div>
    <div className='text-lg leading-relaxed'>
        Input Format
    </div>
    <div className='text-base mb-3'>
    The first line contains an integer T, the total number of test cases. Then follow T lines, each line contains two Integers A and B.
    </div>
    <div className='text-lg leading-relaxed'>
        Output Format
    </div>
    <div className='text-base mb-3'>
    For each test case, add A and B and display the sum in a new line.
    </div>
    <div className='text-lg leading-relaxed'>
        Sample:
    </div>
    </div>

    <div class="relative w-44 overflow-x-auto shadow-md sm:rounded-lg m-16">
    <table className='table-fixed text-base text-lef text-black dark:text-gray-400'>
        <thead class="text-xs">
            <tr>
                <th scope="col" class="px-6 py-3  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    Input
                </th>
                <th scope="col" class="px-6 py-3  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    Output
                </th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td class="px-6 py-3">
                10 20
            </td>
            <td>
                30
            </td>
        </tr>
        <tr>
            <td class="px-6 py-3">
                4 4
            </td>
            <td>
                8
            </td>
        </tr>
        </tbody>
        
    </table>
    </div>
    </>
  )
}

export default Problem;
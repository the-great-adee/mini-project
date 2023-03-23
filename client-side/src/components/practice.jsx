import React from 'react'
import HeadNavBar from './head-nav-bar';
import FootNavBar from './foot-nav-bar';
import { Link } from 'react-router-dom';


function Practice() {
  return (
    <>
    <HeadNavBar />
<div class="flex flex-col items-center justify-center">
  <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="table-auto">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #Problem_ID
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Problem Title 
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Solution
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Difficulty
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #34
                </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
                <Link className='hover:text-yellow-900'>
                Print Hello World
                </Link>
              </td>
              <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap justify-center">
                <Link>
                <img src="https://img.icons8.com/color/24/null/one-page.png"/>
                </Link>
              </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
                Easy
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #12
              </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
              <Link to="/addtwointegers" className='hover:text-yellow-900'>
              Add Two Integers
              </Link>
              </td>
              <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap justify-center">
              <Link>
              <img src="https://img.icons8.com/color/24/null/one-page.png"/>
              </Link>
              </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
              Easy
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #8
              </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
                <Link className='hover:text-yellow-900'>
                Arithmetic Operations
                </Link>
              </td>
              <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap justify-center">
              <Link>
              <img src="https://img.icons8.com/color/24/null/one-page.png"/>
              </Link>
  
              </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
              Easy
              </td>
            </tr>    
            <tr class="bg-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #56
              </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
                <Link className='hover:text-yellow-900'>
                Swap Two Numbers
                </Link>
              </td>
              <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap justify-center">
              <Link>
              <img src="https://img.icons8.com/color/24/null/one-page.png"/>
              </Link>

              </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
              Easy
              </td>
            </tr>
            <tr class="bg-gray-100 border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                #58
              </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
                <Link className='hover:text-yellow-900'>
                Leap Years
                </Link>
              </td>
              <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap justify-center">
              <Link>
              <img src="https://img.icons8.com/color/24/null/one-page.png"/>
              </Link>
              </td>
              <td class="text-base font-normal text-gray-900 px-6 py-4 whitespace-nowrap">
              Easy
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    <FootNavBar/>
    </>
  )
}

export default Practice;
import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"></svg>
    <span class="font-semibold text-xl tracking-tight">CodeHat</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <Link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </Link>
      <Link to="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Practice
      </Link>
      <Link to="/ide" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Online IDE
      </Link>
    </div>
    <div>
      <Link to="/login" class="rounded-full py-2 px-4 leading-none border  text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-slate-500 mt-4 lg:mt-0">Login</Link>
    </div>
  </div>
</nav>
  </>
    );
}

export default NavBar
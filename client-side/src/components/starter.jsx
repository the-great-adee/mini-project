import React from 'react'
import App from './App.css';
import { Link } from 'react-router-dom';

function Starter() {
  return (
    <>
      <section class="px-4 lg:px-16 bg-cover bg-center" style={{backgroundImage: "url('https://wallpapercave.com/wp/wp9027019.jpg')"}}>
        <div class="bg-opacity-60 py-10 px-6 lg:py-20 lg:px-32">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            <span class="leading-loose">Don't Know</span><br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">How To Code.</span>
          </h1>
          <p class="mb-6 text-lg font-sans lg:text-xl xl:text-2xl text-right lg:text-left text-white">
            <span class="leading-loose">Use this platform to Learn</span><br/> 
            Coding and become Job Ready.
          </p>
          <Link to="/register" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Start Now
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Starter;

import React, { useState } from 'react'
import App from './App.css';
import { Link } from 'react-router-dom';
import HeadNavBar from './head-nav-bar';
import FootNavBar from './foot-nav-bar';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";



const RegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);   
        })
        .catch((error) => {
            console.log(error);
        });

    };
  return (
    <><HeadNavBar />
    <section class="bg-gray-50 dark:bg-white px-4 lg:px-16" style={{backgroundImage: "linear-gradient(to right, #38a3a5, #57cc99)", color: "#fff" }}>
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black">
                  <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                  <span class="flex items-center text-5xl font-extrabold dark:text-white">
                   CodeHat™ 
                  </span>
                  
              </a>
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                          Create and account
                      </h1>
                      <form class="space-y-4 md:space-y-6" onChange={signUp} action="#">
                          <div>
                              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abc@gmail.com" required="" />
                          </div>
                          <div>
                              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                          </div>
                          <div class="flex items-start">
                              <div class="flex items-center h-5">
                                  <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                              </div>
                              <div class="ml-3 text-sm">
                                  <label for="terms" class="font-light text-gray-500 dark:text-black">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                              </div>
                          </div>
                          <button type="submit" class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                          <p class="text-sm font-light text-gray-500 dark:text-black">
                              Already have an account? <Link to="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
      </section><FootNavBar /></>
  );
}

export default RegistrationPage;
import React from "react";
import HeadNavBar from "./head-nav-bar";
import FootNavBar from "./foot-nav-bar";

const ProfilePage = () => {
  return (
    <>
        <HeadNavBar />
        <div class="container mx-auto p-5 bg-gray-50 dark:bg-white px-4 lg:px-16" style={{backgroundImage: "linear-gradient(to right, #38a3a5, #57cc99)", color: "#fff" }}>
        <div class="md:flex no-wrap md:-mx-2 ">

            <div class="w-full md:w-3/12 md:mx-2 ">

                <div class="bg-white p-3 border-t-4 border-green-400 rounded-lg">
                    <div class="image overflow-hidden">
                        <img class="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt=""/>
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Joe Goldberg</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">Future billionaire coder</h3>
                    <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">Hey! I'm Joe, a upcoming billionaire business with a lot of Computer Science knowledge. <b>Help change the world.</b></p>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Status</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Member since</span>
                            <span class="ml-auto">Mar 05, 2023</span>
                        </li>
                    </ul>
                </div>

                <div class="my-4"></div>

                <div class="bg-white p-3 hover:shadow rounded-lg">
                    <div class="flex items-center space-x-3 font-semibold  text-gray-900 text-xl leading-8">
                        <span class="text-green-500">
                            <svg class="h-5 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </span>
                        <span>Connect With Me</span>
                    </div>
                    <div class="grid grid-cols-3">
                        <div class="text-center my-2">
                        <a href="#" class="text-gray-700">
                            <img class="h-16 w-16 rounded-full mx-auto" src="https://img.icons8.com/ios-filled/500/000000/github.png" alt=""/>
                            GitHub
                            </a>
                        </div>
                        <div class="text-center my-2">
                        <a href="#" class="text-gray-700">
                            <img class="h-16 w-16 rounded-full mx-auto" src="https://img.icons8.com/ios-glyphs/500/000000/linkedin-circled--v1.png" alt=""/>
                            LinkedIn
                            </a>
                        </div>
                        <div class="text-center my-2">
                        <a href="#" class="text-gray-700">
                            <img class="h-16 w-16 rounded-full mx-auto" src="https://img.icons8.com/ios-filled/500/000000/reddit--v1.png" alt=""/>
                            Reddit
                            </a>
                        </div>
                        <div class="text-center my-2">
                        <a href="#" class="text-gray-700">
                            <img class="h-16 w-16 rounded-full mx-auto" src="https://img.icons8.com/material-sharp/500/000000/twitter.png" alt=""/>
                            Twitter
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div class="w-full md:w-9/12 mx-2 h-64">

                <div class="bg-white p-3 shadow-sm rounded-lg ">
                    <div class="flex items-center space-x-2 font-semibold text-gray-700 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">First Name</div>
                                <div class="px-4 py-2">Joe</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Last Name</div>
                                <div class="px-4 py-2">Goldberg</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Gender</div>
                                <div class="px-4 py-2">Male</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Contact No.</div>
                                <div class="px-4 py-2">+1 998001001</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">Baltimore, Maryland, United States</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Birthday</div>
                                <div class="px-4 py-2">1 November 1986</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Email.</div>
                                <div class="px-4 py-2">
                                    <a class="text-blue-800" href="mailto:jane@example.com">joe@netflix.com</a>
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Views</div>
                                <div class="px-4 py-2">19.24 million+</div>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show Full Information</button></a>
                </div>


                <div class="my-4"></div>


                <div class="bg-white p-3 shadow-sm rounded-lg">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Experience</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">You - Season 4</div>
                                    <div class="text-gray-500 text-xs">February 2023 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">You - Season 3</div>
                                    <div class="text-gray-500 text-xs">October 2021</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">You - Season 2</div>
                                    <div class="text-gray-500 text-xs">December 2019</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">You - Season 1</div>
                                    <div class="text-gray-500 text-xs">September 2018</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span class="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Education</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Lewis & Clark College</div>
                                    <div class="text-gray-500 text-xs">2 Years</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Santa Monica College</div>
                                    <div class="text-gray-500 text-xs">10 Years</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
        <FootNavBar/>
        </>
  )
}

export default ProfilePage;
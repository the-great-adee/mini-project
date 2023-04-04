import React from 'react'
import HeadNavBar from './head-nav-bar'
import FootNavBar from './foot-nav-bar'

function Vision() {
  return (
    <>
    <HeadNavBar/>
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold mb-5">Our Vision</h1>
        <p className="text-gray-600 mb-8">At CodeHat, our vision is to empower coders of all levels to develop their skills and pursue their passions.</p>
        <p className="text-gray-600 mb-8">Our platform offers a range of resources and tools to help beginners get started, and to support more experienced coders in their ongoing learning and growth.</p>
        <p className="text-gray-600 mb-8">We believe that coding is not just a skill, but a way of thinking and problem-solving that can help people succeed in any field. Our goal is to make coding accessible and enjoyable for everyone, and to create a community where coders can connect, collaborate, and learn from each other.</p>
        <p className="text-gray-600 mb-10">Thank you for being a part of our community!</p>
        <p className="text-gray-800 text-lg">Founder</p>
        <p className="text-gray-800 text-lg">Aditya Gupta</p>
      </div>
    </div>
    <FootNavBar/>
    </>
    
  )
}

export default Vision
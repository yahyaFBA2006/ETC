import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <span className="text-lg font-bold">Yahya Mahdi</span>
        </div>
        <div className="mb-4">
          <a href="mailto:yahyamahdi4242@gmail.com" className="text-blue-400 hover:text-blue-200">
            yahyamahdi4242@gmail.com
          </a>
        </div>
        <div className="mb-2">
          <p>Made with <span role="img" aria-label="Heart">❤️</span> using React && Tailwind CSS</p>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
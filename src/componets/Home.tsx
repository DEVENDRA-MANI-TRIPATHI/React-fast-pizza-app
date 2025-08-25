import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <span>
        <Link to='menu'>
          menu
        </Link>
      </span>
    </div>
  )
}

export default Home
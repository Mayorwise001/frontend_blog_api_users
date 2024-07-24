import React from 'react'

function Home(){
    return(
        <>
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <i className="fas fa-home"></i>
          Home
        </a>
        <a href="/login" className="navbar-link">
          <i className="fas fa-sign-in-alt"></i>
          Login
        </a>
        <a href="/signup" className="navbar-link">
          <i className="fas fa-user-plus"></i>
          Sign Up
        </a>
      </div>
    </nav>
        </>
    )
}

export default Home;
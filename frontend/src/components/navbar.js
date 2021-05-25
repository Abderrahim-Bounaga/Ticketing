import React, { useState } from 'react';
import {Link} from 'react-router-dom';


  function _renderLoginOrLogout(){
    return(
      <Link class="nav-link " aria-current="page" to="/login">login</Link>
    );

}


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  _renderLoginOrLogout()
  return (
    <div>
     
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse d-md-flex justify-content-md-end navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/showProfile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashAdmin">Dashbord</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

       
    </div>
  );
}

export default NavBar;
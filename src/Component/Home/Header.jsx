import React from 'react';
import './Home.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation()
  return (
    <div>
        <nav>
        <div className="header">
        <h3><Link to={'/firstComp'}>
          Header
          </Link></h3>
        </div>

        <div className="right">
          <Link className={`f-link ${location.pathname === '/firstComp' ? 'active' : ''}`} to={"/firstComp"}>
            First Component
          </Link>
          <Link className={`f-link ${location.pathname === '/secondComp' ? 'active' : ''}`} to={"/secondComp"}>Second Component</Link>
          <Link className={`f-link ${location.pathname === '/thirdComp' ? 'active' : ''}`} to={'/thirdComp'}>Third Component</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header
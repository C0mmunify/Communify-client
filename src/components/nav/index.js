import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../hamburger';
import './styles.css'

const Nav = () => {

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
    }
      
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
    

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        window.dispatchEvent(new Event("storage"));
    }

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }


    return(
        <div>
            <div className='navigation'>
                {(!hamburgerOpen && windowDimensions.width < 900) ? <></> : <ul>
                    <NavLink to='/profile' activeclassname="active">Home</NavLink>
                    <NavLink to='/events' activeclassname="active">Events</NavLink>
                    <NavLink to='/newevent' activeclassname="active">Create Event</NavLink>
                    <NavLink to='/login' onClick={handleLogout}>Logout</NavLink>
                </ul>}
                <div className='hamburger' onClick={toggleHamburger}>
                    <Hamburger />
                </div>
            </div>
            <div id='spacer'>
            </div>
        </div>

    )
}

export default Nav

import {React, useState, useEffect} from 'react';
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true : false);

        window.addEventListener('storage', () => {
            if(localStorage.getItem('token') !== null)
            {
                console.log(localStorage.getItem("token"))
                setIsLoggedIn(true)
            } else {
                console.log(localStorage.getItem("token"))
                setIsLoggedIn(false)
            }
        });


    return (
        <main>
                {isLoggedIn ? <Nav /> : <></>}
            <Routes>
                <Route path='/' element={<Pages.Homepage />}>
                </Route>
                <Route path='/login' element={<Pages.Login />}>
                </Route>
                <Route path='/profile' element={<Pages.Profile />}>
                </Route>
                <Route path='/register' element={<Pages.Register />}>
                </Route>
                <Route path='/newevent' element={<Pages.NewEvents />}>
                </Route>
                <Route path='/events' element={<Pages.Events />}>
                </Route>
            </Routes>
        </main>
    )
}

export default App;

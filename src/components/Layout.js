import React, { useState,useRef, useEffect,useCallback } from 'react';
import Footer from './Footer';
import NavBar from './Navbar';
import Pre from '../components/Pre'

const Layout = ( { children }) => {
    const [load, upadateLoad] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        upadateLoad(false);
      }, 1200);
    }, []);

    return (
        <>
             <Pre load={load} />
       
        <div className='layout'>
        
        <NavBar />
        
        <div className='content'>
            {children}
        </div>
        <div className='footer'>
        
            <Footer></Footer>
        </div>
            
        </div>
        </>
    );
}

export default Layout;

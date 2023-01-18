import React, { useState,useRef, useEffect,useCallback } from 'react';
import Footer from './Footer';
import NavBar from './Navbar';
 
 

 




const Layout = ( { children }) => {
 

    return (
        
        <div className='layout'>
        
        <NavBar />
        
        <div className='content'>
            {children}
        </div>
        <div className='footer'>
        
            <Footer></Footer>
        </div>
            
        </div>
    );
}

export default Layout;

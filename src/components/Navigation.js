import React from 'react';

const Navigation = ({ onRouteChange, isSignedin }) => {
    if (isSignedin){
        return(
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p onClick={() => onRouteChange('Sign out')} className='f3 link dim pointer pa3 underline'>Sign Out</p>
        </nav>
        )
    }else{
        return(
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={() => onRouteChange('Signin')} className='f3 link dim pointer pa3 underline'>Signin</p>
        <p onClick={() => onRouteChange('Register')} className='f3 link dim pointer pa3 underline'>Register</p>
    </nav>
        )
    }
    
}
export default Navigation;
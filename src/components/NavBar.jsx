import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ user }) {
  return (
    <nav className='NavBar' style={{ display: 'flex', justifyContent:'space-between', 
     position:'fixed', top:0, alignItems:'center', width:'100%', zIndex:'1000',
     background:'#262626', color:'white'}}>


      <div style={{ marginLeft:'10px'}}><h3>React Movies</h3></div>

      <div style={{ background: 'gray', height:'30px', border:'1px solid white', 
      display:'flex', justifyContent:'center', alignItems:'center'}}>

        <Link to="/movies" style={{ margin:'10px', color:'white', textDecoration:'none' }}>Movies</Link>
        &nbsp; | &nbsp;
        <Link to="/actors" style={{ margin:'10px', color:'white', textDecoration:'none' }}>Actors</Link>

      </div>

      <div className='Welcome' style={{ marginRight:'10px' }}>
        {user && <div>Welcome, {user}!</div>} 
      </div>

    </nav>
  );
}

export default NavBar;

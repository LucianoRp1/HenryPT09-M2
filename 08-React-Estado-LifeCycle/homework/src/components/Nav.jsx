import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    
    <div className='barra-Nav'>
      <img src={Logo} alt ='Img not a found' />
      <h3 className='tituloH3'>Henry - Weather App </h3>
      <SearchBar className='btnSearch' onSearch={onSearch} />
    </div>
    
  );
};

export default Nav; 

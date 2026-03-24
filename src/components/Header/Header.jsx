import React from 'react'
import './Header.css'

const Header = () => {
  return (
<>
<header className='header'>
    <div className="logo">
        <span>LOGO</span>
    </div >

 <div className="header_group"> 
        <div className="header_search">
            <input type="text" placeholder='Pesquisar'/>
            <i className='pi pi-search'></i>
        </div>

        <div className='header_notification'>
            <i className='pi pi-bell'></i>
        </div>

        <div className="user_profile">
            <i className="pi pi-user"></i>
            <span>Usuário</span>
        </div>
</div>
</header>
</>
  )
}

export default Header

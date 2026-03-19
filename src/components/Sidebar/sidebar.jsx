import React from 'react'
import './Sidebar.css'


const Sidebar = () => {
  return (
      <nav className='side-bar'>

  <div className='side_group'>
    
    <div className="item">
      <i className="pi pi-th-large"></i>
      <span>Menu</span>
    </div>

    <ul className="side_list">
      <li className="item">
        <i className="pi pi-chart-bar"></i>
        <span>Gráficos</span>
      </li>
      <li className="item">
        <i className="pi pi-users"></i>
        <span>Usuários</span>
      </li>
      <li className="item">
        <i className="pi pi-cog"></i>
        <span>Configurações</span>
      </li>
    </ul>

  </div>

    <div className="item-footer">
    <i className="pi pi-sign-out"></i>
    <span>Sair</span>
  </div>

</nav>
  )
}

export default Sidebar

import React from 'react'
import './Sidebar.css'


const Sidebar = () => {
  return (
      <nav className='side-bar'>
        <di className="user-icon"><i className="pi pi-user"></i></di>
        <div className='side_menu'><i className="pi pi-th-large"></i></div>

        <div className="side_list"><ul>
          <li><i className="pi pi-chart-bar"></i></li>
          <li><i className="pi pi-users"></i></li>
          <li><i className="pi pi-cog"></i></li>
          </ul></div>

        <div className="side_footer"> <i className="pi pi-sign-out"></i></div>
      </nav>

  )
}

export default Sidebar

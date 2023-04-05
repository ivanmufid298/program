import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link style={{textDecoration: 'none'}} to="/" >Nomor 4</Link></li>
            <li><Link style={{textDecoration: 'none'}} to="/no5" >Nomor 5</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
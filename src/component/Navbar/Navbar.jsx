import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import under from '../../assets/under.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mo from '../../assets/mo.svg'
import mc from '../../assets/mc.svg'

const Navbar = () => {
  
  const [menu, setMenu] = useState("home");
  const menuRef = useRef()

  const openMenu = ()=>{
      menuRef.current.style.right="0";
  }
  const closeMenu = ()=>{
      menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='nav-logo' />
      <img src={mo} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
      <img src={mc} onClick={closeMenu} alt="" className='nav-mob-close'/>

        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={under} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me </p></AnchorLink>{menu==="about"?<img src={under} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={under} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={under} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={under} alt=''/>:<></>}</li>
      </ul>

      <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      
    </div>

  )
}
export default Navbar



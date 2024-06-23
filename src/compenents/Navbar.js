import React from "react"; 
import styles from './Navbar.module.css' 
import { NavLink } from "react-router-dom"; 

const NavBar = () => { 

    return (    
        <nav className={styles.NavBar}> 
      <NavLink className= {styles.brand}to="/"> 
        BLOG<span>GENSHIN</span> 
      </NavLink> 
      <ul className={styles.links_list}> -
        <li> 
          <NavLink to="/Home" className={({isActive}) => 
            (isActive ? styles.active: "")}>Home</NavLink>              
        </li> 
        <li> 
        <NavLink to="/Login" className={({isActive}) => 
            (isActive ? styles.active: "")}>Login</NavLink>          
        </li> 
        <li> 
        <NavLink to="/Register" className={({isActive}) => 
            (isActive ? styles.active: "")}>Register</NavLink>          
        </li> 
        <li> 
        <NavLink to="/Produto" className={({isActive}) => 
            (isActive ? styles.active: "")}>Produto</NavLink>          
        </li> 
        <li> 
        <NavLink to="/About" className={({isActive}) => 
            (isActive ? styles.active: "")}>About</NavLink>          
        </li> 
      </ul> 
    </nav> 
    );

}  
export default NavBar; 
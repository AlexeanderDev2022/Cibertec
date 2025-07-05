import menu from './img/menu.svg'
import clear from './img/close.svg'
import './Header.css'
import  { useState } from 'react';
import logo from '../assets/favicon.png'
import { Link } from 'react-router-dom';
function Header() {
    const [click, setClick] = useState(false);
    const handlerClick = () => {
        setClick(!click);
    }
    
  return (
    
     <header>
        
        <div className="header-container">
           <div className="cibertec">   
            <img src={logo} className='logo-img' alt="Logo de Cibertec" />
            <h1 className='logo'>CIBERTEC</h1>
           </div>

          <img src={click ? clear : menu} onClick={()=>handlerClick()} />
        </div>
            <nav className={`nav ${click ? 'active' : ''}`} >
                <ul>
                     <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/reg/estudiantes'}>Registrar Estudiante</Link></li>
					<li><Link to="/lista">Ver lista</Link></li>
                    
                </ul>
                
            </nav>
            
        </header>

        
  );
}
export default Header;
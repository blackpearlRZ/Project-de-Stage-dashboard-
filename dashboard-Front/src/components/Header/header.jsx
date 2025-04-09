import React, { useState } from 'react';
import amanaLogo from '../../assets/amana.png';
import './header.css';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import MesStatistique from '../../assets/MesStatistiques.png';
import mesEnvois from '../../assets/mesEnvois.png';
import Archive from '../../assets/Archiver.png';
import modification from '../../assets/mesDemandesDeModification.png';

export default function Header({ userData ,handleLogout,userInfo}) {
  const [open, setOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  
  // Extract first letter of username
  const userInitial = userData?.family_name?.charAt(0)?.toUpperCase() || 'U';

  return (
    <div className='header-bar'>
      <div className='menu'>
        <FaBars 
          size={25} 
          className="cursor-pointer text-blue-600" 
          onClick={() => setOpen(!open)} 
        />
        <div className={`sidebar ${open ? 'open' : ''}`}>
          <ul className="space-y-2">
            <li>
              <img src={MesStatistique} alt="Statistiques" />
              <Link to='/MesStatistique' onClick={() => setOpen(false)}>Mes Statistiques</Link>
            </li>
            <li>
              <img src={mesEnvois} alt="Envois" />
              <Link to='/Envoi' onClick={() => setOpen(false)}>Mes envois</Link>
            </li>
            <li>
              <img src={Archive} alt="Archive" />
              <Link to='/EnvoiArchive' onClick={() => setOpen(false)}>Mes envois archives</Link>
            </li>
            <li>
              <img src={modification} alt="Modification" />
              <Link to='/DemandeModification' onClick={() => setOpen(false)}>Mes demandes de modification</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <img className='amana-logo' src={amanaLogo} alt="Amana Logo" />
      
      {/* User dropdown section */}
      <div className="user-dropdown-wrapper">
        <div 
          className="user" 
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
        >
          {userInitial}
        </div>
        {isUserDropdownOpen && (
          <div className="user-dropdown-popup">
            <div className={`dropdown-user-info ${isUserDropdownOpen?'isUserDropdownOpen':""}`}>
              <div className="username">{userInfo?.family_name +"  "+ userInfo?.given_name || 'User Demo'}</div> <hr />
              <div className="email">{userInfo?.email || 'dashecomdemo@poste.ma'}</div><hr/>
            <button onClick={handleLogout}>Deconnexion</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';
import './Header.css'; // Stil dosyasını ekleyin

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div style={logoContainerStyle}>
          <img src={profileImage} alt="Profil Fotoğrafı" style={profileImageStyle} />
          <h1 style={logoStyle}>Portfolyo</h1>
        </div>
        <ul style={navListStyle}>
          <li style={navItemStyle}><Link className="linkStyle" to="/">Anasayfa</Link></li>
          <li style={navItemStyle}><Link className="linkStyle" to="/projects">Projeler</Link></li>
          <li style={navItemStyle}><Link className="linkStyle" to="/resume">Özgeçmiş</Link></li>
          <li style={navItemStyle}><Link className="linkStyle" to="/contact">İletişim</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// React stil tanımlamaları
const headerStyle: React.CSSProperties = { backgroundColor: '#343a40', padding: '10px 20px', color: 'white' };
const navStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const logoContainerStyle: React.CSSProperties = { display: 'flex', alignItems: 'center' };
const logoStyle: React.CSSProperties = { fontSize: '1.5rem', fontWeight: 'bold', marginLeft: '10px' };
const profileImageStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  objectFit: 'cover' as React.CSSProperties['objectFit'],
};
const navListStyle: React.CSSProperties = { display: 'flex', listStyleType: 'none', margin: 0, padding: 0 };
const navItemStyle: React.CSSProperties = { marginLeft: '15px' }; // Linkler arasına boşluk ekler

export default Header;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        &copy; {new Date().getFullYear()} Portfolyo. Tüm hakları saklıdır.
      </p>
      <ul style={socialListStyle}>
        <li style={socialItemStyle}>
          <a style={linkStyle} href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li style={socialItemStyle}>
          <a style={linkStyle} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li style={socialItemStyle}>
          <a style={linkStyle} href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
};

// Stil objeleri
const footerStyle = {
  backgroundColor: '#343a40',
  color: 'white',
  padding: '20px',
  textAlign: 'center' as React.CSSProperties['textAlign'], // Tür uyumluluğu için as kullanımı
};

const textStyle = {
  margin: 0,
  fontSize: '14px',
};

const socialListStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  padding: 0,
  marginTop: '10px',
};

const socialItemStyle = {
  margin: '0 10px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default Footer;


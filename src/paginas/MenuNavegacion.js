import React from 'react';
import { Link } from 'react-router-dom';

function MenuNavegacion() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>GAMMATEK</Link>
        </div>
        <div style={styles.enlaces}>
          <Link to="/" style={styles.enlace}>Inicio</Link>
          <Link to="/contacto" style={styles.enlace}>Contacto</Link>
          <Link to="/conocenos" style={styles.enlace}>Conócenos</Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  enlaces: {
    display: 'flex',
  },
  enlace: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default MenuNavegacion;

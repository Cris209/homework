import React from 'react';
import miImagen2 from './auto.jpg';
import miImagen from './auto2.jpg';
import './fondocolor.css';


function Inicio() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Bienvenido a GAMMATEK</h1>
        <p style={styles.subtitle}>Business Process Automation</p>
      </header>

      <section style={styles.section}>
        <div style={styles.textContainer}>
          <h2 style={styles.sectionTitle}>¿Qué hacemos?</h2>
          <p style={styles.sectionContent}>
            En GAMMATEK nos especializamos en la automatización de procesos empresariales utilizando herramientas avanzadas como Power Automate y Power Apps de Microsoft. 
            Nuestro objetivo es ayudar a las empresas a optimizar sus operaciones, mejorar la eficiencia y reducir los costos mediante la automatización de tareas manuales y repetitivas.
          </p>
        </div>

        <div style={styles.imageContainer}>
          <img src={miImagen} alt="Automatización de procesos" style={styles.image} />
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.textContainer}>
          <h2 style={styles.sectionTitle}>Nuestros servicios</h2>
          <ul style={styles.servicesList}>
            <li>Desarrollo de flujos de trabajo personalizados con Power Automate.</li>
            <li>Creación de aplicaciones empresariales intuitivas con Power Apps.</li>
            <li>Integración de sistemas y automatización de procesos.</li>
            <li>Asesoramiento y consultoría en automatización de procesos.</li>
          </ul>
        </div>

        <div style={styles.imageContainer}>
          <img src={miImagen2} alt="Servicios de automatización" style={styles.image} />
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '36px',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '24px',
    color: 'lightgrey',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '60px',
  },
  textContainer: {
    maxWidth: '500px',
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  sectionContent: {
    fontSize: '18px',
    color: 'lightgray',
  },
  servicesList: {
    listStyleType: 'disc',
    paddingLeft: 0,
  },
  imageContainer: {
    maxWidth: '500px',
    marginBottom: '20px',
  },
  image: {
    width: '500px',
    borderRadius: '8px',
  },
};

export default Inicio;

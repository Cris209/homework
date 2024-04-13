import React from 'react';
import './fondocolor.css';
function Contacto() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Contacta con Nosotros</h1>
        <p style={styles.subtitle}>Estamos aquí para ayudarte</p>
      </header>

      <section style={styles.section}>
        <div style={styles.contactInfo}>
          <h2 style={styles.sectionTitle}>Información de Contacto</h2>
          <p style={styles.infoItem}><strong>Dirección:</strong> Calle Principal, Ciudad, País</p>
          <p style={styles.infoItem}><strong>Teléfono:</strong> +123456789</p>
          <p style={styles.infoItem}><strong>Email:</strong> info@gammatek.com</p>
        </div>

        <div style={styles.formContainer}>
          <h2 style={styles.sectionTitle}>Envíanos un Mensaje</h2>
          <form style={styles.form}>
            <input type="text" placeholder="Nombre" style={styles.input} />
            <input type="email" placeholder="Correo Electrónico" style={styles.input} />
            <textarea placeholder="Mensaje" style={styles.textarea}></textarea>
            <button type="submit" style={styles.button}>Enviar</button>
          </form>
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
    color: 'lightgray',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '60px',
  },
  contactInfo: {
    flex: '1',
    marginRight: '40px',
  },
  formContainer: {
    flex: '1',
  },
  sectionTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  infoItem: {
    fontSize: '18px',
    color: 'lightgray',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  button: {
    padding: '10px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Contacto;

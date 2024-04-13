import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './fondocolor.css';
function Conocenos() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchProyectos = async () => {
      // Configurar Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyBRwKI3hK1RSX14lXrCVNWG52shXRiq9YA",
        authDomain: "basereact-eaa18.firebaseapp.com",
        projectId: "basereact-eaa18",
        storageBucket: "basereact-eaa18.appspot.com",
        messagingSenderId: "109154346265",
        appId: "1:109154346265:web:9e6d22b5092a0c81af9188"
      };
      
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      try {
        // Obtener proyectos desde Firestore
        const proyectosSnapshot = await getDocs(collection(db, 'proyectos'));
        const proyectosData = proyectosSnapshot.docs.map(doc => doc.data());
        setProyectos(proyectosData);
      } catch (error) {
        console.error('Error al obtener proyectos:', error);
      }
    };

    fetchProyectos();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Conócenos</h1>
        <p style={styles.subtitle}>Algunos de nuestros proyectos destacados</p>
      </header>

      <section style={styles.section}>
        {proyectos.map((proyecto, index) => (
          <div key={index} style={styles.proyecto}>
            <h2 style={styles.proyectoTitle}>{proyecto.nombre}</h2>
            <p style={styles.proyectoDescripcion}>{proyecto.descripcion}</p>
            <p style={styles.proyectoCliente}><strong>Cliente:</strong> {proyecto.cliente}</p>
          </div>
        ))}
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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  proyecto: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  proyectoTitle: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  proyectoDescripcion: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '10px',
  },
  proyectoCliente: {
    fontSize: '16px',
    color: 'black',
  },
};

export default Conocenos;

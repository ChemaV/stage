// Importa las dependencias necesarias
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Nav from './components/Nav';


const MyPage = () => {
  return (
    <>
      {/* Contenido principal de la página */}
      <section>
        {/* Componente de alerta */}
        {['primary'].map((variant) => (
          <Alert key={variant} variant={variant}>
            Tonight Diva Plavalaguna
          </Alert>
        ))}

        {/* Componente de Navbar */}
        <Nav />
      </section>
    </>
  );
};

export default MyPage;




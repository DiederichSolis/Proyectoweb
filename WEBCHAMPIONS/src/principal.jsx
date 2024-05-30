import React from "react"
import { Link } from 'react-router-dom'

const NavBar1 = () => {
    const navbar = {
      position: 'fixed',
      left: '50px',
      bottom: 'px',
      display: 'flex',
      flexDirection: 'column',
      height: '50vh',
      width: '200px',
      justifyContent: 'center', // Centrar verticalmente los elementos
      padding: '1rem',
      background: ' rgba(2, 48, 71, 1)',
      color: '#fff',
      borderRadius: '10px',
      zIndex: 1000,
    };
  
    const navbarLinks = {
      listStyle: 'none',
      padding: 0,
    };
  
    const navbarLink = {
      color: '#fff',
      fontFamily: 'Century Gothic, sans-serif',
      fontSize: '2rem',
      marginBottom: '2rem', // Aumento del margen inferior para más espacio
      fontWeight: 'bold',
    };
  
    const iconStyles = {
      color: 'white',
      marginLeft: '10px',
      marginRight: '10px',
      textDecoration: 'none',
      fontSize: '1.5em',
    };
  
    return (
      <nav style={navbar}>
        <div>
          <a href="https://www.instagram.com/championsleague" style={iconStyles}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/uefachampionsleague" style={iconStyles}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCpcTrCXblq78GZrTUTLWeBw" style={iconStyles}>
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </nav>
    );
  };

const NavBar = () => {
    const styles = {
        position: 'fixed', // Fijar la posición de la barra de navegación
        left: 0, // Colocarla en la parte superior
        zIndex: 1000, // Asegurar que esté por encima de otros elementos
        background: 'linear-gradient(to bottom, rgba(10, 10, 10, 1), rgba(10, 10, 10, 0))', // color de fondo
        color: 'black', // color de texto
        display: 'flex',
        justifyContent: 'center', // Centrar verticalmente los elementos
        alignItems: 'center', // Centrar horizontalmente los elementos
        justifyContent: 'space-between',
        padding: '0%',
        alignItems: 'center',
        height: '15vh',
        width: '100%',
    };

    const logo = {
        filter: 'invert(100%)',
        padding: '5%',
        height: '65%',
        width: '7%',
    };

    const titulos = {
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '1.5em', 
        fontWeight: 'bold',
        margin: '0',
        padding: '9%',
        color: 'white',
        textDecoration: 'none', 
    };

    const titulos1 = {
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '1.5em', 
        fontWeight: 'bold',
        margin: '0',
        padding: '15%',
        color: 'white',
        textDecoration: 'none', 
    };
    
    return (
        <nav style={styles}>
            <img src='public/champions.png' alt="logo" width="40" height="40" style={logo} />
            <Link to='/' style={titulos}>HOME</Link>
            <Link to='/champions' style={titulos}>CHAMPIONS</Link>
            <Link to='/partidos' style={titulos1}>SEMIFINAL</Link>
        </nav>
    );
}

const VIDEO = () => {
    return (
        <main>
            <video width="100%" height="100%" autoPlay loop playsInline volume={1}>
                <source src="src/assets/multimedia/championsalb.mp4" type="video/mp4" />
            </video>
            
     </main>

    );
}

const Home = () => {
    const styles = {
        backgroundColor: 'rgba(30, 30, 30, 1)', // color de fondo
        overflow: 'hidden', // ocultar el desbordamiento del contenido
        minHeight: '100vh', // altura mínima para cubrir toda la pantalla
        display: 'block',
        position : 'relative',
        margin: 0,
        padding: 0,
    };
    return (
        <main style={styles}>
            <NavBar />
            <NavBar1 />
            <VIDEO />
        </main>
    );
}


export default Home;
import React from "react"
import { Link } from 'react-router-dom'

const Navbar1 = () =>{
    const navbar = {
        position: 'fixed',
        left: '27%',
            top: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: '10vh',
        width: '50%',
        padding: '1rem',
        alignItems: 'center', // Centrar horizontalmente los elementos
        background: 'rgba(0, 0, 0, 0.5)', // Color negro transparente
        color: '#fff',
        borderRadius: '10px',
      
        zIndex: 1000, // Asegurar que esté por encima de otros elementos
      
      };
      
      
      const navbarLinks = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        margin: '0 20%',
        gap: '30%', // Espacio entre los enlaces
        
      };
      
      const navbarLink = {
          color: '#fff',
          fontFamily: 'Century Gothic, sans-serif',
          fontSize: '2rem', // Tamaño de fuente más grande
          marginBottom: '2rem', // Mayor separación entre enlaces
          fontWeight: 'bold',
      };
      
      
        
      
      const iconStyles = {
        color: 'white',
        marginLeft: '10px',
        marginRight: '10px',
        textDecoration: 'none',
        fontSize: '1.5em'
      };
      
        return (
          <nav style={navbar}>
            <div style={navbarLinks}>
              <a href='/' style={navbarLink}>HOME</a>
              <a href='/champions'  style={navbarLink}>CHAMPIONS</a>
              <a href='/partidos'  style={navbarLink}>SEMIFINAL</a>
            </div>
          </nav>
        );
      };
  

const NavBar = () => {
    const navbar = {
      position: 'fixed',
      left: '50px',
          bottom: '27%',
      display: 'flex',
      flexDirection: 'column',
      height: '40vh',
          width: '200px',
      padding: '1rem',
      justifyContent: 'center', // Centrar verticalmente los elementos
      alignItems: 'center', // Centrar horizontalmente los elementos
      background: 'rgba(0, 0, 0, 0.5)', // Color negro transparente
      color: '#fff',
      borderRadius: '10px',
    
      zIndex: 1000, // Asegurar que esté por encima de otros elementos
    
    };
    
    
    const navbarLinks = {
      listStyle: 'none',
      justifyContent: 'center', // Centrar verticalmente los elementos
      alignItems: 'center', // Centrar horizontalmente los elementos
      padding: 0
      
    };
    
    const navbarLink = {
        color: '#fff',
        fontFamily: 'Century Gothic, sans-serif',
        fontSize: '2rem', // Tamaño de fuente más grande
        marginBottom: '2rem', // Mayor separación entre enlaces
        fontWeight: 'bold',
    };
    
    
      
    
    const iconStyles = {
      color: 'white',
      marginLeft: '10px',
      marginRight: '10px',
      textDecoration: 'none',
      fontSize: '1.5em'
    };
    
      return (
        <nav style={navbar}>
            <a href="https://www.instagram.com/championsleague" style={iconStyles}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/uefachampionsleague" style={iconStyles}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCpcTrCXblq78GZrTUTLWeBw" style={iconStyles}>
              <i className="fab fa-youtube"></i>
            </a>
        
        </nav>
      );
    };

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
            <Navbar1 />
            <NavBar />
            <VIDEO />
        </main>
    );
}


export default Home;



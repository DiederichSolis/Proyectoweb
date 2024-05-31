/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'

const NavBar = () => {
  const styles = {
    position: 'fixed',
    left: '27%',
    top: '20px',
    display: 'flex',
    flexDirection: 'row',
    height: '8vh',
    width: '50%',
    padding: '1rem',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    borderRadius: '50px',
    zIndex: 1000,
    overflow: 'hidden' // Asegura que no haya contenido que se desborde
  }

  const logo = {
    filter: 'invert(100%)',
    height: '100%',
    marginRight: '2rem' // Asegura que haya espacio entre el logo y los enlaces
  }

  const navbarLink = {
    color: '#fff',
    fontFamily: 'Century Gothic, sans-serif',
    fontSize: '1.5rem', // Ajusta el tamaño de la fuente para asegurar que todos los enlaces quepan
    fontWeight: 'bold',
    margin: '0 1rem' // Ajusta el espacio entre los enlaces
  }

  const navbarLinks = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    overflowX: 'auto' // Permite el desplazamiento horizontal si el contenido es demasiado ancho
  }

  return (
        <nav style={styles}>
            <img src='public/champions.png' alt="logo" style={logo} />
            <div style={navbarLinks}>
                <Link to='/' style={navbarLink}>HOME</Link>
                <Link to='/champions' style={navbarLink}>CHAMPIONS</Link>
                <Link to='/partidos' style={navbarLink}>SEMIFINAL</Link>
                <Link to='/login' style={navbarLink}>LOGIN</Link>
            </div>
        </nav>
  )
}

const Footer = () => {
  const styles = {
    position: 'fixed', // Fijar la posición del footer
    bottom: 0, // Colocarla en la parte inferior
    background: 'rgba(0, 0, 0, 0.5)', // Color de fondo semi-transparente
    color: 'white', // color de texto
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0%',
    height: '5vh',
    width: '100%',
    zIndex: 1000 // Asegurar que esté por encima de otros elementos
  }

  return (
        <footer style={styles}>
            <p>&copy; 2024 - Todos los derechos reservados Autor: Diederich Solis</p>
        </footer>
  )
}

const VIEW = () => {
  return (
        <main>
            <img src='https://img.fcbayern.com/image/upload/t_cms-4x3-seo/v1604104556/cms/public/images/fcbayern-com/homepage/club/erfolge/champions-league/2020_header.jpg' alt="video" width="100%" height="100%" />
            <img src='https://cloudfront-us-east-2.images.arcpublishing.com/reuters/GVKRY6LADFJUDB75BOE55MDS44.jpg' alt="video" width="100%" height="100%" />
            <img src='https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/lxe9mu744i9mxuzt1b36' alt="video" width="100%" height="100%" />
            <img src='https://assets.goal.com/images/v3/blt146f2815f515a556/GettyImages-2147034939.jpg?auto=webp&format=pjpg&width=3840&quality=60' alt="video" width="100%" height="100%" />
        </main>
  )
}

const Champions = () => {
  const styles = {
    backgroundColor: 'White', // color de fondo
    overflow: 'hidden', // ocultar el desbordamiento del contenido
    minHeight: '100vh', // altura mínima para cubrir toda la pantalla
    display: 'block',
    position: 'relative',
    margin: 0,
    padding: 0
  }
  return (
        <main style={styles}>
            <NavBar />
            <VIEW />
            <Footer />
        </main>
  )
}

export default Champions

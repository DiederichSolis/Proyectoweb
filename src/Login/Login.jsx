import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CryptoJS from 'crypto-js'

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

            <div style={navbarLinks}>
                <Link to='/' style={navbarLink}>HOME</Link>
                <Link to='/champions' style={navbarLink}>CHAMPIONS</Link>
                <Link to='/partidos' style={navbarLink}>SEMIFINAL</Link>
                <Link to='/login' style={navbarLink}>LOGIN</Link>
            </div>
        </nav>
  )
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Hashear la contraseña usando CryptoJS
    const hashedPassword = CryptoJS.SHA256(password).toString()

    console.log(hashedPassword)
    console.log(email)

    // Enviar datos a la API
    const response = await fetch('http://3.129.191.211/api/22952/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password: hashedPassword })
    })

    const data = await response.json()

    if (data.message === 'ok') {
      // Guardar token en local storage
      localStorage.setItem('token', data.token)
      // Redirigir a la página de administración
      navigate('/admin')
    } else {
      // Manejar error
      alert('Login failed')
    }
  }

  const styles = {
    backgroundColor: 'Black',
    overflow: 'hidden',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: 0,
    padding: 0
  }

  return (
        <section className="vh-100" style={{ background: 'black', ...styles }}>
            <NavBar />
            <div className="container py-5 h-100 d-flex flex-column justify-content-center align-items-center">
                <div className="row d-flex align-items-center justify-content-center w-100">

                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="email"
                                    id="form1Example13"
                                    className="form-control form-control-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className="form-label" htmlFor="form1Example13" style={{ color: 'white' }}>Email address</label>
                            </div>
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="form1Example23"
                                    className="form-control form-control-lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label className="form-label" htmlFor="form1Example23" style={{ color: 'white' }}>Password</label>
                            </div>
                            <div className="d-flex justify-content-center mb-4">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Login

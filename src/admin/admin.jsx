/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const UpdatePostModal = ({ show, handleClose, post, onUpdate }) => {
  const [Ciudad, setCiudad] = useState(post.Ciudad)
  const [Pais, setPais] = useState(post.Pais)
  const [Equipo_local, setEquipo_local] = useState(post.Equipo_local)
  const [Equipo_visitante, setEquipo_visitante] = useState(post.Equipo_visitante)
  const [Goles_Local, setGoles_Local] = useState(post.Goles_Local)
  const [Goles_Visitante, setGoles_Visitante] = useState(post.Goles_Visitante)
  const [imagen_base64, setImagen_base64] = useState(post.imagen_base64)
  const [Fase_champions, setFase_champions] = useState(post.Fase_champions)
  const [Fecha_partido, setFecha_partido] = useState(post.Fecha_partido)

  React.useEffect(() => {
    setCiudad(post.Ciudad)
    setPais(post.Pais)
    setEquipo_local(post.Equipo_local)
    setEquipo_visitante(post.Equipo_visitante)
    setGoles_Local(post.Goles_Local)
    setGoles_Visitante(post.Goles_Visitante)
    setImagen_base64(post.imagen_base64)
    setFase_champions(post.Fase_champions)
    setFecha_partido(post.Fecha_partido)
  }, [post])

  const formatDate = (date) => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    const hours = String(d.getHours()).padStart(2, '0')
    const minutes = String(d.getMinutes()).padStart(2, '0')
    const seconds = String(d.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }

  const handleUpdatePost = async (e) => {
    e.preventDefault()
    try {
      const formattedDate = formatDate(Fecha_partido)
      const response = await fetch(`http://3.129.191.211/api/22952/posts/${post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Ciudad,
          Pais,
          Equipo_local,
          Equipo_visitante,
          Goles_Local,
          Goles_Visitante,
          imagen_base64,
          Fase_champions,
          Fecha_partido: formattedDate,
          Nombre_jugador: post.Nombre_jugador,
          Apellido_jugador: post.Apellido_jugador,
          Edad_jugador: post.Edad_jugador,
          Posicion_jugador: post.Posicion_jugador
        })
      })

      if (response.ok) {
        const updatedPost = await response.json()
        onUpdate(updatedPost) // Llama a la función onUpdate para actualizar el estado en el componente padre
        handleClose()
      } else {
        console.error('Error al actualizar el post', response.statusText)
      }
    } catch (error) {
      console.error('Error en la red al actualizar el post', error)
    }
  }

  return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Update Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleUpdatePost}>
                    <Form.Group className="mb-3" controlId="Ciudad">
                        <Form.Label>Ciudad:</Form.Label>
                        <Form.Control type="text" value={Ciudad} onChange={(e) => setCiudad(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Pais">
                        <Form.Label>Pais:</Form.Label>
                        <Form.Control type="text" value={Pais} onChange={(e) => setPais(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Equipo_local">
                        <Form.Label>Equipo Local:</Form.Label>
                        <Form.Control type="text" value={Equipo_local} onChange={(e) => setEquipo_local(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Equipo_visitante">
                        <Form.Label>Equipo Visitante:</Form.Label>
                        <Form.Control type="text" value={Equipo_visitante} onChange={(e) => setEquipo_visitante(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Goles_Local">
                        <Form.Label>Goles Local:</Form.Label>
                        <Form.Control type="number" value={Goles_Local} onChange={(e) => setGoles_Local(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Goles_Visitante">
                        <Form.Label>Goles Visitante:</Form.Label>
                        <Form.Control type="number" value={Goles_Visitante} onChange={(e) => setGoles_Visitante(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="imagen_base64">
                        <Form.Label>Imagen (Base64):</Form.Label>
                        <Form.Control type="text" value={imagen_base64} onChange={(e) => setImagen_base64(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Fase_champions">
                        <Form.Label>Fase Champions:</Form.Label>
                        <Form.Control type="text" value={Fase_champions} onChange={(e) => setFase_champions(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Fecha_partido">
                        <Form.Label>Fecha Partido:</Form.Label>
                        <Form.Control type="text" value={Fecha_partido} onChange={(e) => setFecha_partido(e.target.value)} />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
  )
}

const DeletePostModal = ({ show, handleClose, handleDelete, post }) => {
  return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this post?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
  )
}

const PostModal = ({ show, handleClose }) => {
  const [Ciudad, setCiudad] = useState('')
  const [Pais, setPais] = useState('')
  const [Equipo_local, setEquipo_local] = useState('')
  const [Equipo_visitante, setEquipo_visitante] = useState('')
  const [Goles_Local, setGoles_Local] = useState('')
  const [Goles_Visitante, setGoles_Visitante] = useState('')
  const [imagen_base64, setImagen_base64] = useState('')
  const [Fase_champions, setFase_champions] = useState('')

  const formatDate = (date) => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    const hours = String(d.getHours()).padStart(2, '0')
    const minutes = String(d.getMinutes()).padStart(2, '0')
    const seconds = String(d.getSeconds()).padStart(2, '0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }

  const handleCreatePost = async (e) => {
    e.preventDefault()
    const Fecha_partido = formatDate(new Date()) // Obtener la fecha y hora actuales en formato 'YYYY-MM-DD HH:MM:SS'
    try {
      const response = await fetch('http://3.129.191.211/api/22952/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Ciudad,
          Pais,
          Equipo_local,
          Equipo_visitante,
          Goles_Local,
          Goles_Visitante,
          imagen_base64,
          Fase_champions,
          Fecha_partido,
          Nombre_jugador: null,
          Apellido_jugador: null,
          Edad_jugador: null,
          Posicion_jugador: null
        })
      })

      if (response.ok) {
        console.log('Post creado con éxito')
        handleClose()
      } else {
        console.error('Error al crear post', response.statusText)
      }
    } catch (error) {
      console.error('Error en la red al crear post', error)
    }
  }

  return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>New Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleCreatePost}>
                    <Form.Group className="mb-3" controlId="Ciudad">
                        <Form.Label>Ciudad:</Form.Label>
                        <Form.Control type="text" value={Ciudad} onChange={(e) => setCiudad(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Pais">
                        <Form.Label>Pais:</Form.Label>
                        <Form.Control type="text" value={Pais} onChange={(e) => setPais(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Equipo_local">
                        <Form.Label>Equipo Local:</Form.Label>
                        <Form.Control type="text" value={Equipo_local} onChange={(e) => setEquipo_local(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Equipo_visitante">
                        <Form.Label>Equipo Visitante:</Form.Label>
                        <Form.Control type="text" value={Equipo_visitante} onChange={(e) => setEquipo_visitante(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Goles_Local">
                        <Form.Label>Goles Local:</Form.Label>
                        <Form.Control type="number" value={Goles_Local} onChange={(e) => setGoles_Local(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Goles_Visitante">
                        <Form.Label>Goles Visitante:</Form.Label>
                        <Form.Control type="number" value={Goles_Visitante} onChange={(e) => setGoles_Visitante(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="imagen_base64">
                        <Form.Label>Imagen (Base64):</Form.Label>
                        <Form.Control type="text" value={imagen_base64} onChange={(e) => setImagen_base64(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Fase_champions">
                        <Form.Label>Fase Champions:</Form.Label>
                        <Form.Control type="text" value={Fase_champions} onChange={(e) => setFase_champions(e.target.value)} />
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Post
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
  )
}

const NavBar = () => {
  const styles = {
    position: 'fixed',
    left: '27%',
    top: '20px',
    display: 'flex',
    flexDirection: 'row',
    height: '8vh',
    width: '70%',
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
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
        <nav style={styles}>

            <div style={navbarLinks}>
                <Link to='/' style={navbarLink}>HOME</Link>
                <Link to='/champions' style={navbarLink}>CHAMPIONS</Link>
                <Link to='/partidos' style={navbarLink}>SEMIFINAL</Link>
                <Link to='/login' style={navbarLink}>LOGIN</Link>
            </div>
            <Button variant="primary" onClick={handleShow}>
                New Post +
            </Button>
            <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
            <PostModal show={show} handleClose={handleClose} />
        </nav>
  )
}

const Loading = () => {
  return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1>Loading...</h1>
        </div>
  )
}

const PostsLoader = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('http://3.129.191.211/api/22952/posts')
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        if (!Array.isArray(data)) {
          throw new Error('Formato de datos incorrecto')
        }
        setPosts(data)
      } catch (error) {
        setError(error.toString())
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId))
  }

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)))
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>Error al cargar los posts</h1>
            </div>
    )
  }

  if (posts.length === 0) {
    return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>No hay posts disponibles</h1>
            </div>
    )
  }

  return (
        <>
            {posts.map(post => (
                <Card key={post.id} post={post} onDelete={handleDeletePost} onUpdate={handleUpdatePost} />
            ))}
        </>
  )
}

const Card = ({ post, onDelete, onUpdate }) => {
  const [isColumnLayout, setIsColumnLayout] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)

  const cardStyles = {
    boxSizing: 'border-box',
    padding: '1%',
    margin: '5rem 0 0 0',
    transition: '0.3s',
    backgroundColor: 'rgba(0, 48, 73,0.85)',
    display: 'flex',
    borderRadius: '58px',
    alignItems: isColumnLayout ? 'center' : 'center',
    flexDirection: isColumnLayout ? 'column' : 'row',
    gap: '0.5rem',
    width: '50%', // Ajusta el ancho al 50% del contenedor padre
    height: 'auto', // Ajusta el alto automáticamente al contenido
    maxWidth: '600px', // Opcional: define un ancho máximo
    maxHeight: '400px' // Opcional: define un alto máximo
  }

  const cardStyle1 = {
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '2%',
    margin: '5rem 0 0 0',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '58px',
    backgroundColor: 'rgba(0, 48, 73,0.85)',
    display: 'flex',
    gap: '1rem',
    width: '50%', // Ajusta el ancho al 50% del contenedor padre
    height: 'auto', // Ajusta el alto automáticamente al contenido
    maxWidth: '600px', // Opcional: define un ancho máximo
    maxHeight: '400px', // Opcional: define un alto máximo
    justifyContent: 'center'
  }

  const containerStyles = {
    display: 'flex', // Configura el contenedor como un flexbox
    flexWrap: 'wrap', // Permite que los elementos se envuelvan si es necesario
    gap: '1rem', // Espacio entre las cards
    justifyContent: 'center', // Opcional: centra las cards horizontalmente
    alignItems: 'center', // Opcional: alinea las cards verticalmente
    marginTop: '2rem' // Espacio superior del contenedor
  }

  const TitleStyles = {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Century Gothic, sans-serif',
    flex: '1'
  }

  const textsStyles = {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Century Gothic, sans-serif',
    opacity: '0.8',
    flex: '1'
  }

  const imageStyles = {
    maxHeight: '40%',
    maxWidth: '40%',
    borderRadius: '5px',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const handleResize = () => {
    setIsColumnLayout(window.innerWidth <= 768)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`http://3.129.191.211/api/22952/posts/${postId}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        console.log('Post eliminado con éxito')
        onDelete(postId) // Llamar a la función onDelete pasada como prop para actualizar la lista de posts
        setShowDeleteModal(false) // Cerrar el modal después de la eliminación
      } else {
        console.error('Error al eliminar el post', response.statusText)
      }
    } catch (error) {
      console.error('Error en la red al eliminar el post', error)
    }
  }

  return (
        <div style={containerStyles}>
            <div style={cardStyle1}>
                <img src={`${post.imagen_base64}`} alt={post.Equipo_local} style={imageStyles} />
            </div>
            <div style={cardStyles}>
                <div style={{ flex: '1' }}>
                    <h2 style={TitleStyles}>{post.Fase_champions}</h2>
                    <h3 style={TitleStyles}>{post.Equipo_visitante + ' vs ' + post.Equipo_local}</h3>
                    <p style={textsStyles}>{'Goles: ' + post.Goles_Visitante + ' - ' + post.Goles_Local}</p>
                    <p style={textsStyles}>{'Fecha: ' + post.Fecha_partido}</p>
                    <p style={textsStyles}>{'Pais: ' + post.Pais}</p>
                    <p style={textsStyles}>{'Ciudad: ' + post.Ciudad}</p>
                </div>
                <Button variant="primary" onClick={() => setShowUpdateModal(true)}>
                    Update
                </Button>
                <Button variant="danger" onClick={() => setShowDeleteModal(true)}>
                    Delete
                </Button>
            </div>
            <DeletePostModal
                show={showDeleteModal}
                handleClose={() => setShowDeleteModal(false)}
                handleDelete={handleDelete}
                post={post}
            />
            <UpdatePostModal
                show={showUpdateModal}
                handleClose={() => setShowUpdateModal(false)}
                post={post}
                onUpdate={onUpdate}
            />
        </div>
  )
}

Card.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    Ciudad: PropTypes.string,
    Pais: PropTypes.string,
    Nombre_jugador: PropTypes.string,
    Edad_jugador: PropTypes.number,
    Posicion_jugador: PropTypes.string,
    Equipo_local: PropTypes.string,
    Equipo_visitante: PropTypes.string,
    Goles_Local: PropTypes.number,
    Goles_Visitante: PropTypes.number,
    Fecha_partido: PropTypes.string,
    imagen_base64: PropTypes.string,
    Fase_champions: PropTypes.string
  }),
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
}

Card.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    Ciudad: PropTypes.string,
    Pais: PropTypes.string,
    Nombre_jugador: PropTypes.string,
    Edad_jugador: PropTypes.number,
    Posicion_jugador: PropTypes.string,
    Equipo_local: PropTypes.string,
    Equipo_visitante: PropTypes.string,
    Goles_Local: PropTypes.number,
    Goles_Visitante: PropTypes.number,
    Fecha_partido: PropTypes.string,
    imagen_base64: PropTypes.string,
    Fase_champions: PropTypes.string
  }),
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
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

const Admin = () => {
  const styles = {
    backgroundColor: 'White',
    overflow: 'hidden',
    minHeight: '100vh',
    display: 'block',
    position: 'relative',
    margin: 0,
    padding: 0
  }
  return (
        <main style={styles}>
            <NavBar />
            <React.Suspense fallback={<Loading />}>
                <PostsLoader />
            </React.Suspense>
            <Footer />
        </main>
  )
}

export default Admin

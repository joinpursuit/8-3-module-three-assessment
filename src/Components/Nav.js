import logo from './logo.png'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav>
      <Link to='/'>
        <img className='logo' src={logo} alt={'logo pic'} />
      </Link>
      <p>
        <Link to='/movies'>Movies</Link>
      </p>
      <p>
        <Link to='/people'>People</Link>
      </p>
      <p>
        <Link to='/locations'>Locations</Link>
      </p>
    </nav>
  )
}

export default Nav

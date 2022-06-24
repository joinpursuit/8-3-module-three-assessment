import logo from './logo.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to='/'>
        <img src={logo} alt={'logo pic'} />
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

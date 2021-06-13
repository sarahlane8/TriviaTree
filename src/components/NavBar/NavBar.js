import './NavBar.css'
import treeIconSrc from '../../utils/assets/treeIconSrc'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const activeStyling = {
    textDecoration: 'underline',
    textDecorationColor: '#DE5476',
    color: 'inherit'
  }

  return(
    <nav className='nav-bar'>
      <img src={treeIconSrc} alt='cartoon tree' />
      <h1>Trivia Tree</h1>
      <ul className='nav-links'>
        <li>
          <NavLink
            exact to='/'
            activeStyle={activeStyling}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact to='/questions'
            activeStyle={activeStyling}>
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink
            exact to='/savedQuestions'
            activeStyle={activeStyling}>
            Saved Questions
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

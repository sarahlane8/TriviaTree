import { NavLink } from 'react-router-dom'
import { treeIconSrc } from '../../utils/assets/treeIconSrc'
import './NavBar.css'


const activeStyling = {
  textDecoration: 'underline',
  textDecorationColor: '#DE5476',
  color: 'inherit'
}

const NavBar = () => {
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

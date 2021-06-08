import './NavBar.css'
import treeIconSrc from '../../utils/treeIconSrc'

const NavBar = () => {
  return(
    <nav>
      <img src={treeIconSrc} alt='cartoon tree' />
      <h1>Trivia Tree</h1>
      <div className='nav-links'>
        <button>Home</button>
        <button>Saved Questions</button>
      </div>
    </nav>
  )
}

export default NavBar

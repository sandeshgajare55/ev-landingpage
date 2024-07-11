import './Navbar.css'

// created a navbar which will display above 
export const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>EV Landing</div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='nav-contact'>Contact</li>
      </ul>

    </div>
  )
}

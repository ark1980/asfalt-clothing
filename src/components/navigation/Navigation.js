import { NavLink, Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <Link to='/' className={styles.logo_link}>
          asfalt
        </Link>
      </span>
      <nav className={styles.nav}>
        <ul>
          <NavLink className={styles.navlink} to='/shop'>
            <li>shop</li>
          </NavLink>
          <NavLink className={styles.navlink} to='/contact'>
            <li>contact</li>
          </NavLink>
          <NavLink className={styles.navlink} to='sign-in'>
            <li>sing in</li>
          </NavLink>
          <NavLink className={styles.navlink} to='/cart'>
            <li>cart</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation

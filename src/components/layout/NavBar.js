import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import Container from './Container'
import logo from "../../img/nav_icon.png"

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'> <img src={logo} alt='ISBNow' /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Início</Link></li>
                    <li className={styles.item}><Link to='/books'>Livros</Link></li>
                    <li className={styles.item}><Link to='/contact'>Contatos</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar
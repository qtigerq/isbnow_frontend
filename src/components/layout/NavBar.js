import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import Container from './Container'
import {SiGitbook} from 'react-icons/si'

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link className={styles.logo} to='/'><SiGitbook /> ISBNow</Link>
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
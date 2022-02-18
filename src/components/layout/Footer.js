import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Footer</p>
            <p className={styles.copyright}><span>ISBNow</span> - Todos os direitos reservados® &copy; 2022</p>
        </footer>
    )
}

export default Footer
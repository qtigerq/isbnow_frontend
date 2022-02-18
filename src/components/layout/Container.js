import styles from './Container.module.css'

const Container = ({children, customClass}) => {
    return (
        <div className={`${styles.container} ${styles[customClass]}`}>
            {children}                                                     {/*Os elementos filhos do Container serão encaixados dentro da div do Container*/}
        </div>
    )
}
export default Container
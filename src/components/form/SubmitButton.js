import styles from './SubmitButton.module.css'

const SubmitButton = ({text}) => {
    return (
        <div>
            <button className={styles.button}>{text}</button>
        </div>
    )
}

export default SubmitButton
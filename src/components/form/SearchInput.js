import styles from './SearchInput.module.css'

const SearchInput = ({type, name, text, placeholder, handleOnChange, value}) => {
    return (
        <div className={styles.search}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}

export default SearchInput
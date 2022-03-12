import styles from './BookSearch.module.css'
import { useState } from 'react'
import SearchInput from '../form/SearchInput'
import SubmitButton from '../form/SubmitButton'

const BookSearch = ({handleSubmit, searchData}) => {

    const [search, setSearch] = useState({})

    const submit = (event) => {
        event.preventDefault()
        handleSubmit(search.string)
    }
    
    const handleChange = (event) => {
        setSearch({ ...search, [event.target.name]: event.target.value })
    }

    return (
            <form onSubmit={submit} className={styles.filter}>
                <SearchInput
                    type='text'
                    text='Buscar livro'
                    name='string'
                    placeholder='Digite o nome do livro ou do autor...'
                    handleOnChange={handleChange}
                    value={search.value}
                />
                <SubmitButton text='Procurar' />
            </form>
    )
}

export default BookSearch
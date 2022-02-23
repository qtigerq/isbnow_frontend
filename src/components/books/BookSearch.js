import styles from './BookSearch.module.css'

import { useState } from 'react'

import SearchInput from '../form/SearchInput'
import SubmitButton from '../form/SubmitButton'

const BookSearch = ({handleSubmit, searchData}) => {

    const [search, setSearch] = useState({})

    const submit = (event) => {
        event.preventDefault()                                          //Nao deixa o formulario ser executado como Page Reload.
        handleSubmit(search.string)                                              //Executa o método que for passado pela PROP e passa o project que esta cadastrado no form como argumento
    }
    
    const handleChange = (event) => {                                           //Funciona com qualquer formulário que tenha um input digitável
        setSearch({ ...search, [event.target.name]: event.target.value })           // ...book=Pegar todos os dados do book até então (state); event.target.name (o nome do INPUT, independente do INPUT preenchido) vai receber event.target.value.
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
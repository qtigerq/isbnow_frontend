import { useNavigate } from 'react-router-dom'
import BookForm from '../books/BookForm'
import styles from './NewBook.module.css'
import { Url } from '../../constants/Global'

const NewBook = () => {
    const navigate = useNavigate();
    
    const createBook = (book) => {
        fetch(`${Url}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/books', { state: {message: 'Livro cadastrado com sucesso!'}})
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newbook_container}>
            <h1>Cadastrar livro</h1>
            <p>Insira as informações do livro que deseja cadastrar.</p>
            <BookForm handleSubmit={createBook} buttonText='Cadastrar livro'/>
        </div>
    )
}

export default NewBook


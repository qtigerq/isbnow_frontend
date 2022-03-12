import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BookForm from './../books/BookForm'
import styles from './NewBook.module.css'
import Container from '../layout/Container'
import { Url } from '../../constants/Global'

const EditBook = () => {
    const {id} = useParams()
    const [book, setBook] = useState([])
    
    useEffect(()  => {
        fetch(`${Url}/books/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setBook(data)
        })
        .catch(err => console.log(err))
    }, [id])

    const editBook = (book) => {
        fetch(`${Url}/books/${book.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        })
        .then(resp => resp.json())
        .then(data => {
            //setBook(data);
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Container>
                <div className={styles.newbook_container}>
                    <BookForm handleSubmit={editBook} buttonText={'Salvar'} bookData={book}/>
                </div>
            </Container>
        </div>
    )
}

export default EditBook
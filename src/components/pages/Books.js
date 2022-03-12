import { useEffect, useState } from 'react'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import styles from './Books.module.css'
import BookLine from '../books/BookLine'
import BookSearch from '../books/BookSearch'
import { Url } from '../../constants/Global'

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${Url}/books`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setBooks(data);
            })
            .catch(err => console.log(err))
    }, [])

    const removeBook = (id) => {
        fetch(`${Url}/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setBooks(books.filter((book) => book.id !== id))
            })
            .catch(err => console.log(err))
    }

    const findBook = (string) => {
        fetch(`${Url}/books/${string}`, {    
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setBooks(data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.books_container}>
            <Container customClass='title_container'>
                <h1>Livros</h1>
                <LinkButton to='/newbook' text='Novo livro' />
            </Container>
            <Container customClass='search_container'>
                <BookSearch handleSubmit={findBook} />
            </Container>
            <Container >
                {books.length > 0 &&
                    books.map((book) => (
                        <BookLine
                            key={book.id}
                            id={book.id}
                            isbn={book.isbn}
                            title={book.title}
                            authors={book.authors}
                            category={book.category}
                            imprint={book.imprint}
                            lang={book.lang}
                            pages={book.pages}
                            publi_year={book.publi_year}
                            handleRemove={removeBook}
                        />
                    ))
                }
                {books.length === 0 &&
                    <p>Não existem livros cadastrados.</p>
                }
            </Container>
        </div>
    )
}

export default Books
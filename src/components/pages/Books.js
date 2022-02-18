import { useEffect, useState } from 'react'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import styles from './Books.module.css'

import BookLine from '../books/BookLine'

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3001/books', {
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

        fetch(`http://localhost:3001/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {                                                           //Como não trabalha com dados, omitimos a variavel data
            setBooks(books.filter((book) => book.id !== id))                    //Faz um filtro dos livros excluindo aquele com ID que esta sendo excluído. Assim, exclui-se o livro no front e ele já foi excluído no Banco de Dados, assim não precisa fazer uma nova requisição trazendo todos os livros cadastrados novamente
        })
        .catch(err => console.log(err))
        
    }

    return (
        <div className={styles.books_container}>
            <div className={styles.title_container}>
                <h1>Livros</h1>
                <LinkButton to='/newbook' text='Novo livro'/>
            </div>
            <Container >
                {books.length > 0 &&
                    books.map((book) => (
                        <BookLine
                            key={book.id}                                         //O React precisa de uma key para se orientar nas atualizações de seus componentes.
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
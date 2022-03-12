import { useState } from 'react'
import { BsEye } from 'react-icons/bs'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './BookForm.module.css'

const BookForm = ({ handleSubmit, buttonText, bookData }) => {
    const [book, setBook] = useState(bookData || {})

    const submit = (event) => {
        event.preventDefault()
        handleSubmit(book)
    }

    const handleChange = (event) => {                                           //Funciona com qualquer formulário que tenha um input digitável
        setBook({ ...book, [event.target.name]: event.target.value })
    }

    const handleChangeNumber = (event) => {
        setBook({ ...book, [event.target.name]: parseInt(event.target.value) ? parseInt(event.target.value) : '' })
        console.log(book)
    }

    const getBookByIsnb = (isbn) => {
        fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`, {
            method: 'GET',
        })
            .then(resp => resp.json())
            .then(data => {
                let isbn_book = {
                    isbn: isbn,
                    title: data[`ISBN:${isbn}`].details.title,
                    imprint: data[`ISBN:${isbn}`].details.publishers.toString(),
                    publi_year: data[`ISBN:${isbn}`].details.publish_date.slice(0, -3),
                }
                setBook(isbn_book);
            })
            .catch(err => console.log(err))
    }

    const getBookByIsnbGoogle = (isbn) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${isbn}+isbn&maxResults=1`, {
            method: 'GET',
        })
            .then(resp => resp.json())
            .then(data => {
                let isbn_book = {
                    isbn: isbn,
                    title: data.items[0].volumeInfo.title,
                    authors: data.items[0].volumeInfo.authors.toString(),
                    imprint: data.items[0].volumeInfo.publisher,
                    publi_year: data.items[0].volumeInfo.publishedDate.slice(0, -6),
                    pages: data.items[0].volumeInfo.pageCount,
                    category: data.items[0].volumeInfo.categories.toString(),
                    lang: (data.items[0].volumeInfo.language),
                }
                setBook(isbn_book);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.form_back}>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type='number'
                    text='ISBN'
                    name='isbn'
                    placeholder=''
                    handleOnChange={handleChangeNumber}
                    value={book.isbn ? book.isbn : ''}
                />
                <Input
                    type='text'
                    text='Título'
                    name='title'
                    placeholder=''
                    handleOnChange={handleChange}
                    value={book.title ? book.title : ''}
                />
                <Input
                    type='text'
                    text='Autor'
                    name='authors'
                    placeholder=''
                    handleOnChange={handleChange}
                    value={book.authors ? book.authors : ''}
                />
                <Input
                    type='text'
                    text='Categoria'
                    name='category'
                    placeholder=''
                    handleOnChange={handleChange}
                    value={book.category ? book.category : ''}
                />
                <Input
                    type='text'
                    text='Editora'
                    name='imprint'
                    placeholder=''
                    handleOnChange={handleChange}
                    value={book.imprint ? book.imprint : ''}
                />
                <Input
                    type='text'
                    text='Língua'
                    name='lang'
                    placeholder=''
                    handleOnChange={handleChange}
                    value={book.lang ? book.lang : ''}
                />
                <Input
                    type='number'
                    text='Páginas'
                    name='pages'
                    placeholder=''
                    handleOnChange={handleChange}
                    value={book.pages ? book.pages : ''}
                />
                <Input
                    type='number'
                    text='Ano de publicação'
                    name='publi_year'
                    placeholder=''
                    handleOnChange={handleChange}
                    value={book.publi_year ? book.publi_year : ''}
                />
                <SubmitButton text={buttonText} />
            </form>
            {console.log('BOOKDATA:', bookData)}
            <button className={styles.isbn_button} onClick={() => getBookByIsnb(book.isbn)}><BsEye /></button>
            <button className={styles.isbn_button} onClick={() => getBookByIsnbGoogle(book.isbn)}>G</button>
        </div>
    )
}

export default BookForm
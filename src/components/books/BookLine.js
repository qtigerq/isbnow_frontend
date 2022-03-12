import { Link } from 'react-router-dom'
import styles from './BookLine.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

const BookLine = ({id, isbn, title, authors, imprint, category, lang, pages, publi_year, handleRemove}) => {
    const remove = (event) => {
        event.preventDefault()
        handleRemove(id)
    }

    return (
        <ul className={styles.book}>
            <li>{title} / {authors}</li>
            <li className={styles.bookline_actions}>
            <Link to={`/editbook/${id}`}><BsPencil /></Link>
            <button onClick={remove}><BsFillTrashFill /></button>
            </li>
        </ul>
    )
}

export default BookLine
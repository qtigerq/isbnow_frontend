import { useNavigate } from 'react-router-dom'                                       //permite redirecionar o usuário (quando der um Post por exemplo)

import BookForm from '../books/BookForm'

import styles from './NewBook.module.css'

const NewBook = () => {

    const navigate = useNavigate();

    const createBook = (book) => {                                                          //Metodo para postar dados no BD

        fetch('http://localhost:3001/books', {                                                  //3. ...nesta rota.
            method: 'POST',                                                                     //2. ...pelo método POST...
            headers: {
                'Content-Type': 'application/json',                                             //Vai se comunicar com JSON
            },
            body: JSON.stringify(book),                                                         //1. Vai mandar os dados do projeto como string...
        })
        .then((resp) => resp.json())                                                            //Recebe uma resposta e transforma ela em JSON
        .then((data) => {                                                                       //
            console.log(data)
            navigate('/books', { state: {message: 'Livro cadastrado com sucesso!'}})            //redirecionamento com mensagem
        })
        .catch(err => console.log(err))                                                         //Recebe um possível erro que der no servidor
    }

    return (
        <div className={styles.newbook_container}>
            <h1>Cadastrar livro</h1>
            <p>Insira as informações do livro que deseja cadastrar.</p>
            <BookForm handleSubmit={createBook} buttonText='Cadastrar livro'/>                      {/*Com handleSubmit=createBook, quando chamar o formulario vai dizer pra ele que está criando um novo livro e não editando um existente, chamando a funcao CreateBook*/}
        </div>
    )
}

export default NewBook


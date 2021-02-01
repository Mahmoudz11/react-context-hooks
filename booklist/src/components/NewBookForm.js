import React, { useContext, useState  } from 'react'
import {BookContext} from '../context/BookContext'

function NewBookForm() {
    const [title, settitle] = useState('')
    const [author, setauthor] = useState('')
    const { addBook } = useContext(BookContext)

    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            addBook(title, author)
            settitle('')
            setauthor('')
            }}>
            <label>Book Title :</label>
            <input
                type='text'
                placeholder='Book Name'
                onChange={(e) => settitle(e.target.value)}
                value={title} />
            <label>Author Name : </label>
            <input 
                type='text'
                placeholder='Author Name'
                onChange={(e) => setauthor(e.target.value)}
                value={author}
                />
            <input
                type='submit'
                value='Add New Book' />
        </form>
    )
}

export default NewBookForm

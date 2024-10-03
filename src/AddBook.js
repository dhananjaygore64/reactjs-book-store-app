import React from 'react';
import { useState } from 'react';

const Addbook = ({onAdd}) => {
    const [bookName, setBookName] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookPublishDate, setBookPublishDate] = useState('')
    const [bookPublisher, setBookPublisher] = useState('')
    const [isBookNameFilled, setIsBookNameFilled] = useState(true)
    const [isBookAuthorFilled, setIsBookAuthorFilled] = useState(true)
    const [isBookPublishDateFilled, setIsBookPublishDateFilled] = useState(true)
    const [isBookPublisherFilled, setIsBookPublisherFilled] = useState(true)

    const onSubmit = (e)=>{
        e.preventDefault()
        if(!bookName) setIsBookNameFilled(false)
        else setIsBookNameFilled(true)
        if(!bookAuthor) setIsBookAuthorFilled(false)
        else setIsBookAuthorFilled(true)
        if(!bookPublishDate) setIsBookPublishDateFilled(false)
        else setIsBookPublishDateFilled(true)
        if(!bookPublisher) setIsBookPublisherFilled(false)
        else setIsBookPublisherFilled(true)
        if(!bookName || !bookPublisher || !bookAuthor || !bookPublishDate ){
            return alert("Please add all the required fields!!")
        }
        else{
            onAdd({name: bookName,author: bookAuthor,publishDate: bookPublishDate, publisher: bookPublisher});
            setBookName('')
            setBookAuthor('')
            setBookPublishDate('')
            setBookPublisher('')
            return;
        }
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <label>Book Name </label>
                    {!isBookNameFilled && <p style={{color: "red", fontSize:"12px" }}>**Please provide this field value!!</p>}
                </div>
                <input type="text" placeholder='Enter Book Name' value={bookName} onChange={(e)=>setBookName(e.target.value)} />
            </div>
            <div className='form-control'>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <label>Book Author </label>
                    {!isBookAuthorFilled && <p style={{color: "red", fontSize:"12px"}}>**Please provide this field value!!</p>} 
                </div>
                <input type="text" placeholder='Enter Book Author' value={bookAuthor} onChange={(e)=>setBookAuthor(e.target.value)} />
            </div>
            <div className='form-control'>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <label>Book Publish Date </label>
                    {!isBookPublishDateFilled && <p style={{color: "red", fontSize:"12px"}}>**Please provide this field value!!</p>}
                </div>
                <input type="text" placeholder='Enter Book Publish Date' value={bookPublishDate} onChange={(e)=>setBookPublishDate(e.target.value)} />
            </div>
            <div className='form-control'>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <label>Book Publisher </label>
                    {!isBookPublisherFilled && <p style={{color: "red", fontSize:"12px"}}>**Please provide this field value!!</p>} 
                </div>
                <input type="text" placeholder='Enter Book Publisher' value={bookPublisher} onChange={(e)=>setBookPublisher(e.target.value)} />
            </div>
            <input type='submit' value='Save Book Detail' className='btn btn-block'/>
        </form>
    );
}

export default Addbook;

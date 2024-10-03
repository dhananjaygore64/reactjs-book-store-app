import React from 'react';
import Button from './Button'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'

const About = () => {
    return (
        <div>
            <div className='container about'>
                <h2>About</h2>
                <ul>
                    <li>You can add new book to the store by clicking Add button on top right corner.</li>
                    <li>You can delete existing book from the store if not require by clicking on cross button infront of that book.</li>
                    <li>You can edit the existing book detail by clicking on edit button infront of that book.</li>
                    <li>The edited book must be save by clicking on save button infront of that book.</li>
                </ul>
                <Link to='/'><Button text={"Go Back"} icon={<FaArrowLeft className='back-arrow-icon'/>}></Button></Link>
            </div>
            <Footer footerLink="/" footerLinkText="Home"/>
        </div>

    );
}

export default About;

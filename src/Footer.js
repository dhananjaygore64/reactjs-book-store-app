import React from 'react';
import {Link} from 'react-router-dom'


const Footer = ({footerLink, footerLinkText}) => {
    return (
        <footer className='footer'>
            <div>
                <p> Copyright &copy; 2023</p>
                <Link to={footerLink}>{footerLinkText}</Link>
            </div>
        </footer>
    );
}

export default Footer;

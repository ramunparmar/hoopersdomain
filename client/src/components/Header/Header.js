import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/hooper-domain-logo.png';


export default function Header() {
    return (
        <section className="header">
            <Link to='/'>
                <img src={logo} alt="website logo" className="header__logo" />
            </Link>
        </section>
    )
}

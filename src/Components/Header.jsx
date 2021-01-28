import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.scss'

export default class Header extends React.Component{

    render() {
        return (
            <header className='header'>
                <Link to={'/'} className='header__links'>
                    <h3>
                        Чаты
                    </h3>
                </Link>
                <Link to={'/profile'} className='header__links'>
                    <h3>
                        Профиль
                    </h3>
                </Link>
            </header>
        )
    }
}
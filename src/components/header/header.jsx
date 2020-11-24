import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header className="header container" id="header">
                <a className="header__logo" href="/#">volkodav</a>
                <ul className="header__menu">
                    <li>
                        <a href="/#" className="menu__item">Блог</a>
                    </li>
                    <li>
                        <a href="/#" className="menu__item">Контакты</a>
                    </li>
                    <li>
                        <button type="button" className="menu-btn__appointment ">
                            Записаться
                        </button>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header;
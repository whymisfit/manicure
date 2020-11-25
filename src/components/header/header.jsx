import React from 'react';
import MenuImg from "../../static/icons/png/menu.png";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            display: "",
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu = () => {
        this.setState({
            display: "flex",
        })
    }

    closeMenu = () => {
        this.setState({
            display: "none",
        })
    }

    render() {
        const _display = this.state.display;

        return (
            <header className="container-fluid">
                <div className="header container">
                    <a className="header__logo" href="/#">volkodav</a>
                    <ul className="header__menu" style={{display: _display}}>
                        <li>
                            <a href="/#" className="menu__item">Блог</a>
                        </li>
                        <li>
                            <a href="/#" className="menu__item">Контакты</a>
                        </li>
                        <li>
                            <button type="button" className="menu-btn__appointment">
                                Записаться
                            </button>
                        </li>
                    </ul>
                    <a type="button" className="header__menu-btn" onClick={
                        this.state.display === "flex" ? this.closeMenu : this.showMenu
                    }>
                        <img src={MenuImg} alt=""/>
                    </a>
                </div>
            </header>
        )
    }
}

export default Header;
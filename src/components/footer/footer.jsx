import React from "react";
import VkImg from "../../static/icons/svg/vk.svg";
import InstImg from "../../static/icons/svg/inst-square.svg";
import TelegramImg from "../../static/icons/svg/telegram.svg";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer container-fluid" id="footer">
                <div className="container">
                    <div className="footer__list">
                        <p><b>О нас</b></p>
                        <a href="/#"><p>Карьера</p></a>
                        <a href="/#"><p>Контакты</p></a>
                        <a href="/#"><p>Для инвестеров</p></a>
                    </div>
                    <div className="footer__list">
                        <p><b>Дополнительная информация</b></p>
                        <a href="/#"><p>Использование cookie</p></a>
                        <a href="/#"><p>Юридическая информация</p></a>
                        <a href="/#"><p>Согласие на обработку персональных данных</p></a>
                    </div>
                    <div className="footer__info">
                        <div className="footer__socials">
                            <a href="/#">
                                <img src={VkImg} alt=""/>
                            </a>
                            <a href="/#">
                                <img src={InstImg} alt=""/>
                            </a>
                            <a href="/#">
                                <img src={TelegramImg} alt=""/>
                            </a>
                        </div>
                        <p className="footer__brand">
                            volkodav
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
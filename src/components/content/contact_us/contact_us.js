import React from "react";
import InstImg from "../../../static/icons/png/inst-square.png"
import TelegramImg from "../../../static/icons/png/telegram.png"
import VkImg from "../../../static/icons/png/vk.png"

class ContactUs extends React.Component {
    render() {
        return (
            <div className="contact-us container">
                <p>Напишите нам в любую социальную сеть</p>
                <div className="contact-us__socials">
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
                <p>или</p>
                <p>оставьте контактные данные</p>

                <Form/>

            </div>
        )
    }
}

class Form extends React.Component {
    render() {
        return (
            <form action="/#" method="post" className="contact-us__form">
                <label htmlFor="name">
                    Имя
                    <input type="text" name="name"/>
                </label>
                <label htmlFor="phone">
                    Номер телефона
                    <input type="phone" name="phone"/>
                </label>
                <label htmlFor="email">
                    Почта
                    <input type="email" name="email"/>
                </label>

                <button className="contact-us__btn">
                    Отправить
                </button>

                <label htmlFor="newsletter">
                    <input type="checkbox" name="newsletter"/>
                    Получать новостную рассылку на электронную почту
                </label>
                <label htmlFor="eula">
                    <input type="checkbox" name="eula"/>
                    Согласен с условиями обработки персональных данных
                </label>
            </form>
        );
    }
}

export default ContactUs;
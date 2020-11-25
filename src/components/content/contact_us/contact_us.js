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

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick = (event) => {
        this.setState({
            modal: !this.state.modal,
        })
        event.preventDefault();
    }

    render() {
        return (
            <div>
                {this.state.modal ? <ModalInfo onClick={this.onClick}/> : null}
                <form onSubmit={this.onClick} method="post" className="contact-us__form">
                    <label htmlFor="name">
                        Имя
                        <input type="text" name="name" required/>
                    </label>
                    <label htmlFor="phone">
                        Номер телефона
                        <input type="phone" name="phone" required/>
                    </label>
                    <label htmlFor="email">
                        Почта
                        <input type="email" name="email" required/>
                    </label>

                    <button className="contact-us__btn" >
                        Отправить
                    </button>

                    <label htmlFor="newsletter">
                        <input type="checkbox" name="newsletter"/>
                        Получать новостную рассылку на электронную почту
                    </label>
                    <label htmlFor="eula">
                        <input type="checkbox" name="eula" required/>
                        Согласен с условиями обработки персональных данных
                    </label>
                </form>
            </div>
        );
    }
}

class ModalInfo extends React.Component {
    render() {
        return (
            <div className="modal-bg">
                <div className="modal">
                    <h3 className="modal__title">
                        Нет слов, одним эмоции, если вы тут что-то заполнили<br /> 😻
                    </h3>
                    <p className="modal__text">
                        Отправить форму можно будет позже))
                        Если её хоть кто-нибудь нажмёт...
                    </p>
                    <button onClick={this.props.onClick}>
                        Буду ждать
                    </button>
                </div>
            </div>
        )
    }
}

export default ContactUs;
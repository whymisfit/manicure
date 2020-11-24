import React from 'react';
import ListServices from "./list_services/list_services";
import ListSpecialist from "./list_specialist/list_specialist";
import SeregaImg from "../../static/img/spec1.png";
import AnastasiaImg from "../../static/img/spec2.png";
import MozerImg from "../../static/img/spec3.png";
import ContactUs from "./contact_us/contact_us";
import Footer from "../footer/footer";

const services = [
    {
        name: "Все в одном",
        desc: "Шугаринг, хуяринг, маникюр, педикюр и т.д.",
        cost: 6000,
    },
    {
        name: "Маникюр",
        desc: "Делаем все что сделать ваши ногти превосходными",
        cost: 1200,
    },
    {
        name: "Шугаринг",
        desc: "Не ебу что это, но звучит многообещающе",
        cost: 2500,
    },
    {
        name: "Выпить вино",
        desc: "Звучит сексуально",
        cost: "Бесплатно",
    },
]

const specialists = [
    {
        name: "Сергей Волчков",
        quote: "Считаю, что ногти это отражение души человека, если ногти говно то и человек говно",
        experience: 20,
        img: SeregaImg,
        inst_url: "https://instagram.com/serejaaaaaaaaaaaaaaaaaa/",
        title: "Мастер",
        desc: "Жопастер",
    },
    {
        name: "Анастасия Юдакова",
        quote: "Несправедливо когда наш клиент получает меньше удовольствия чем его ноготочки",
        experience: 20,
        img: AnastasiaImg,
        inst_url: "https://www.instagram.com/kookiesgirll/",
        title: "Администратор",
        desc: "Не отпустит без эйфории",
    },
    {
        name: "Дмитрий Мозер",
        quote: "Ваши ноготочки увидит весь мир",
        experience: 30,
        img: MozerImg,
        inst_url: "https://www.instagram.com/mozyra/",
        title: "Фотограф",
        desc: "Сфоткает так, что мать родная не узнает",
    },
]

class Content extends React.Component {
    render() {
        const _services = services;
        const _specialists = specialists;

        return (
            <div className="content container" id="content">
                <h3 className="title">Услуги</h3>
                <ListServices services={_services}/>

                <ListSpecialist specialists={_specialists}/>

                <h3 className="title">Есть вопросы?</h3>
                <ContactUs />
            </div>
        )
    }
}

export default Content;
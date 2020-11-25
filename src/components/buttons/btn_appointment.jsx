import React from "react";

class BtnAppointment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        this.setState({
            modal: !this.state.modal,
        })
    }

    render() {
        const _style = this.props.style;

        return (
            <div>
                <button className="btn-appointment" style={_style} onClick={this.onClick}>
                    Записаться
                </button>
                { this.state.modal ? <ModalInfo onClick={this.onClick}/> : null}
            </div>
        )
    }
}

class ModalInfo extends React.Component {
    render() {
        return (
            <div className="modal-bg">
                <div className="modal">
                    <h3 className="modal__title">
                        Спасибо что хотели записаться ко мне! <br /> 🥰
                    </h3>
                    <p className="modal__text">
                        Если шо, можно писать в <a href="https://vk.com/sereganyebatkaktaktovrotkompot">ВК</a> или
                        на почту <span><b>seregabigjopa@yandex.ru</b></span>
                    </p>
                    <p className="modal__desc">
                        Но пока-что я не работаю, пока-что ...
                    </p>
                    <button onClick={this.props.onClick}>
                        Понял!
                    </button>
                </div>
            </div>
        )
    }
}

export default BtnAppointment;
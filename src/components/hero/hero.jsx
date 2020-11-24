import React from 'react';
import BtnAppointment from "../buttons/btn_appointment";

class Hero extends React.Component {
    render() {
        return (
            <div className="hero" id="hero">
                <div className="container hero__title">
                    <h1>
                        Ваши ноготочки в надёжных руках
                    </h1>
                    <BtnAppointment/>
                </div>
            </div>
        )
    }
}

export default Hero;
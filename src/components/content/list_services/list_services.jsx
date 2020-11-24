import React from 'react';
import BtnAppointment from "../../buttons/btn_appointment";

class ListServices extends React.Component {
    render() {
        return (
            <div className="services">
                {this.props.services.map((service, index) => {
                    return <Service service={service} key={index}/>
                })}

                <BtnAppointment style={{float: 'right'}}/>
            </div>
        )
    }
}

class Service extends React.Component {
    render() {
        return (
            <div key={this.props.index} className="services__item">
                <div>
                    <p  className="item__name">{this.props.service.name}</p>
                    <p className="item__desc">{this.props.service.desc}</p>
                </div>
                <p className="item__cost">{this.props.service.cost} руб.</p>
            </div>
        )
    }
}

export default ListServices;
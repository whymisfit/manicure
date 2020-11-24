import React from "react";

class BtnAppointment extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        alert("привет");
    }

    render() {
        const _style = this.props.style;

        return (
            <button className="btn-appointment" style={_style} onClick={this.onClick}>
                Записаться
            </button>
        )
    }
}

export default BtnAppointment;
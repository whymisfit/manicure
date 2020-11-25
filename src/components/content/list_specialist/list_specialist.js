import React from 'react';
import InstIcon from "../../../static/icons/png/inst-square.png"

class ListSpecialist extends React.Component {
    render() {
        return (
            <div className="list-specialist">
                {this.props.specialists.map((specialist, index) => {
                    return <Specialist specialist={specialist} key={index}/>
                })}
            </div>
        )
    }
}

class Specialist extends React.Component {
    render() {
        return (
            <div key={this.props.index}>
                <h3 className="title">
                    {this.props.specialist.title}
                    <span>{this.props.specialist.desc}</span>
                </h3>
                <div className="specialist">
                    <img className="specialist__img" src={this.props.specialist.img} alt=""/>
                    <div className="specialist__info">
                        <p className="specialist__name">
                            {this.props.specialist.name}
                        </p>
                        <p className="specialist__quote">
                            {this.props.specialist.quote}
                        </p>
                        <div className="specialist__footer">
                            <p>
                                Стаж: {this.props.specialist.experience} лет
                            </p>
                            <a href={this.props.specialist.inst_url} target="_blank">
                                <img src={InstIcon} alt="Инстаграмм"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListSpecialist;
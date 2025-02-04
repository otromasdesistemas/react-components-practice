import React, {Component} from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false,
            guestMsj: 'Bienvendio a TODO NOTICIAS, donde encontraras noticias de todo tipo de índole!'
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    handleBtn = () => {
        this.setState({isClicked:true})
    }



    render() {
        return(
            <header>
                <h1>{this.props.appName}</h1>
                <h2>{this.state.guestMsj}</h2>
                <button onClick={this.handleBtn}>Click Para Noticias</button>
                <p>{this.state.isClicked ? 'Marcha atrás con los aumentos de tarifas de 12%: el Gobierno dice que las boletas de luz subirán sólo 1,5% en febrero, Pese a que en el Boletín Oficial el ENRE había informado que las facturas subirían 2,1% para los hogares de ingresos altos, 12,3% para los de ingresos bajos y 8,4% para los de ingresos medios, la Secretaría de Energía dijo que fue una equivocación': 'Clickea el botón de arriba para ver noticias'}</p>
            </header>
        )
    }
}

export default Header;
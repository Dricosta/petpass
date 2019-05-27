import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import bgJulio from '../../assets/bgJulio.jpeg'
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BuyCoins from '../BuyCoins/index';
import IconSmile from '@material-ui/icons/SentimentSatisfiedAlt';
import api from '../../services/api';
import './style.scss'

const idLocalStorage = localStorage.getItem("idLogin")

class PerfilOwner extends Component {
    constructor(props){
        super(props)
        this.state = {
            Creditos: 0,
            rating: 0
        }
    }
    
    async componentDidMount(){
        const UserLogado = await api.get(`/user/${idLocalStorage}`)

        this.setState({
            Creditos: UserLogado.data.result.qtdCredit
        })
    }

    handleAddDez = () => {
        api.put(`user/credit/${idLocalStorage}/10`).then((response) => {
            if (response.status === 200) {
                this.setState({
                    Creditos: response.data.result.qtdCredit
                })
            }
        })
    }

    handleAddTrinta = () => {
        api.put(`user/credit/${idLocalStorage}/30`).then((response) => {
            if (response.status === 200) {
                this.setState({
                    Creditos: response.data.result.qtdCredit
                })
            }
        })
    }

    handleAddCinquenta = () => {
        api.put(`user/credit/${idLocalStorage}/50`).then((response) => {
            if (response.status === 200) {
                this.setState({
                    Creditos: response.data.result.qtdCredit
                })
            }
        })
    }

    render() {

        const { photo, name, description, genero, birthDate, rate } = this.props;

        const stylesUser = {
            backgroundImage: 'url(' + bgJulio + ')',
            backgroundSize: 'cover'
        }
        return (
            <div className="PerfilUser_content">
                <div className="PerfilUser_content-group">
                    <div className="PerfilUser_content-user">
                        <Avatar className="PerfilUser_avatar" src={photo} style={stylesUser}/>
                        <div className="PerfilUser_content-user_title">
                            {name}
                            <span className="PerfilUser_description">{description}</span>
                            <div className="PerfilUser_content-wrap">
                                <span className="PerfilUser_content-wrap-sexo">Sexo: {genero}</span>
                                <span className="PerfilUser_content-wrap-date">Nascimento: {birthDate}</span>
                            </div>
                        </div>
                    </div>
                    <div className="PerfilUser_content-tools">
                        <span className="PerfilUser_content-tools_group">
                            <IconSmile />
                            <StarRatings
                            className="noteStar"
                            rating={rate}
                            starRatedColor="gold"
                            numberOfStars={5}
                            name='rating'/>
                        </span>
                        <div className="coins-group">
                            <span className="coins_value"><FontAwesomeIcon className="coins" icon="coins"/>R${this.state.Creditos}</span>
                            <BuyCoins
                            handleAddDez={this.handleAddDez}
                            handleAddTrinta={this.handleAddTrinta}
                            handleAddCinquenta={this.handleAddCinquenta}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PerfilOwner;

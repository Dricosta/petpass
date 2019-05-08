import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import bgJulio from '../../assets/bgJulio.jpeg'
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BuyCoins from '../BuyCoins/index';
import IconSmile from '@material-ui/icons/SentimentSatisfiedAlt';
import './style.scss'


class PerfilOwner extends Component {
    constructor(){
        super()
        this.state = {
            rating: 0
        }
        this.changeRating = this.changeRating.bind(this)
    }
    
    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        }, () => {
            console.log('stars:', this.state.rating)
        });
      }

    render() {
        const stylesUser = {
            backgroundImage: 'url(' + bgJulio + ')',
            backgroundSize: 'cover'
        }
        return (
            <div className="PerfilUser_content">
                <div className="PerfilUser_content-group">
                    <div className="PerfilUser_content-user">
                        <Avatar className="PerfilUser_avatar" style={stylesUser}/>
                        <div className="PerfilUser_content-user_title">
                            Julio Cesar Klain
                            <span className="PerfilUser_description">Meu nome é Julio Klain sou Desenvolvedor Full-Stack</span>
                            <div className="PerfilUser_content-wrap">
                                <span className="PerfilUser_content-wrap-sexo">Masculino</span>
                                <span className="PerfilUser_content-wrap-date">25-07-1999</span>
                            </div>
                        </div>
                    </div>
                    <div className="PerfilUser_content-tools">
                        <span className="PerfilUser_content-tools_group">
                            <IconSmile />
                            <StarRatings
                            className="noteStar"
                            rating={this.state.rating}
                            starRatedColor="brown"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'/>
                        </span>
                        <div className="coins-group">
                            <span className="coins_value"><FontAwesomeIcon className="coins" icon="coins"/>$200</span>
                            <BuyCoins/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PerfilOwner;

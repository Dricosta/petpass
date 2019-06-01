import React, { Component } from 'react';
import PerfilOwner from '../PerfilOwner/index';
import Comments from '../Comments/index';
import MsgNotification from '../MsgNotification/index';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';
import './style.scss'

let idLocalStorage = ''

class InfoJobber extends Component {
    constructor(){
        super()
        this.state = {
            Comments: [],
            UserLogado: [],
            GenderJobberLogado: ''
        }
    }  

    async componentDidMount(){
        idLocalStorage = localStorage.getItem("idJobber")
        const responseJobber = await api.get(`jobber/${idLocalStorage}`)
        const responseComments = await api.get(`jobber/comments/${idLocalStorage}`)

        console.log('comentarios:', responseComments)

        console.log('usuario:', responseJobber)

        this.setState({
            UserLogado: responseJobber.data.result,
            Comments: responseComments.data.result
        }, () => {
            if (responseJobber.data.result.gender === "h") {
                this.setState({
                    GenderJobberLogado: 'Masculino'
                })
            } else {
                this.setState({
                    GenderJobberLogado: 'Feminino'
                })
            } 
        })
    }

    
    render() {
        const { UserLogado } = this.state;
        const date = new Date();
        const birthDate = {
            day: date.getDay(UserLogado.birthday),
            month: date.getMonth(UserLogado.birthday),
            year: date.getFullYear(UserLogado.birthday)
        }
        return (
            <div className="InfoJobber">

                <PerfilOwner 
                photo={UserLogado.photo}
                name={UserLogado.name}
                description={UserLogado.description}
                genero={this.state.GenderJobberLogado}
                birthDate={`${birthDate.day}/${birthDate.month}/${birthDate.year}`}
                rate={UserLogado.rate}
                creditos={UserLogado.qtdCredit}/>


                <div className="InfoJobber_group">
                    <div className="InfoJobber_group-comments">
                    {this.state.Comments.map((comments) => {
                        return(<Comments
                            key={comments._id}
                            photo={comments.photo}
                            rate={comments.rate}
                            name={comments.userName}
                            hour={distanceInWords(comments.date, new Date(), {locale: pt} )}
                            comments={comments.comment}/>
                        )
                    })}
                    </div>
                </div>


                <MsgNotification 
                PetNotification={this.state.PetNotification} 
                PetMsg={this.state.PetMsg}
                PetMsgColor={this.state.PetMsgColor}
                PetNotificationIcon={this.state.PetNotificationIcon}/>


            </div>
        );
    }
}

export default InfoJobber;

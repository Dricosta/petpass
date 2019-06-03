import React, { Component } from 'react';
import PerfilOwner from '../PerfilOwner/index';
import Comments from '../Comments/index';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';
import './style.scss'

let idLocalStorage = ''

// Infos

// nome Owner
// foto Owner
// email Owner
// nome Jobber
// foto Jobber
// email Jobber
// nomeAnimal
// fotoAnimal
// dataExecução
// statusServico
// statusPagamentoOwner
// statusPagamentoJobber

class InfoServices extends Component {
    constructor() {
        super()
        this.state = {
            Comments: [{
                _id: '123213',
                photo: '',
                rate: 5,
                userName: 'Teste',
                hour: distanceInWords(new Date(), { locale: pt }),
                comment: 'This is a test'
            }],
            UserLogado: [],
            GenderUserLogado: ''
        }
    }



    async componentDidMount() {
        idLocalStorage = localStorage.getItem("idOwner") || localStorage.getItem("idJobber")
        const responseUser = await api.get(`user/${idLocalStorage}`)
        const responseComments = await api.get(`user/comments/${idLocalStorage}`)

        console.log('comentarios:', responseComments)

        console.log('usuario:', responseUser)

        this.setState({
            UserLogado: responseUser.data.result,
            Comments: responseComments.data.result
        }, () => {
            if (responseUser.data.result.gender === "h") {
                this.setState({
                    GenderUserLogado: 'Masculino'
                })
            } else {
                this.setState({
                    GenderUserLogado: 'Feminino'
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
            <div className="InfoUser">

                <PerfilOwner
                    photo={UserLogado.photo}
                    name={UserLogado.name}
                    description={UserLogado.description}
                    genero={this.state.GenderUserLogado}
                    birthDate={`${birthDate.day}/${birthDate.month}/${birthDate.year}`}
                    rate={UserLogado.rate}
                    creditos={UserLogado.qtdCredit} />


                <div className="InfoUser_group">
                    <div className="InfoUser_group-comments">
                        {this.state.Comments.map((comments) => {
                            return (<Comments
                                key={comments._id}
                                photo={comments.photo}
                                rate={comments.rate}
                                name={comments.userName}
                                hour={distanceInWords(comments.date, new Date(), { locale: pt })}
                                comments={comments.comment} />
                            )
                        })}

                    </div>
                </div>
            </div>
        );
    }
}

export default InfoServices;

import React, { Component } from 'react';
import PerfilOwner from '../PerfilOwner/index';
import Comments from '../Comments/index';
import MyPets from '../MyPets/index';
import Fab from '@material-ui/core/Fab';
import IconPets from '@material-ui/icons/Pets';
import './style.scss'




class InfoUser extends Component {
    render() {
        return (
            <div className="InfoUser">
                <PerfilOwner/>
                <div className="InfoUser_group">
                    <div className="InfoUser_group-comments">
                        <Comments/>
                        <Comments/>
                    </div>
                    <div className="InfoUser_group-pets">
                        <MyPets/>
                        <MyPets/>
                        <MyPets/>
                        <MyPets/>
                        <MyPets/>
                        <Fab  aria-label="Pets" className="InfoUser_add-pet" >
                            <IconPets />
                        </Fab>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoUser;

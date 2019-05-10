import React, { Component } from 'react';
import dog from '../../assets/dog.png';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIncon from '@material-ui/icons/Create'
import Button from '@material-ui/core/Button';
import './style.scss'

const MyPets = ({ handleDelete, handleEdit, animalSize, animalType, description, breed, weight, name }) => { 
    const stylesUser = {
        backgroundImage: 'url(' + dog + ')',
        backgroundSize: 'cover'
    }
    return (
        <div className="MyPets">
            <div className="MyPets_info">
                <Avatar className="MyPets_avatar" style={stylesUser}/>
                <div className="MyPets_info-main">
                    <span className="MyPets_info-main_name">{name}</span>
                    <span className="MyPets_info-main_description">{description}</span>
                </div>
                <Button className="MyPets_info-btn" onClick={handleEdit}>
                    <CreateIncon className="MyPets_info-btn_edit" />
                </Button>

                <Button className="MyPets_info-btn" onClick={handleDelete}>
                    <DeleteIcon className="MyPets_info-btn_delete" />
                </Button>
            </div>
            <div className="MyPets_info-secundary">
                <span className="MyPets_info-secundary_raca">{breed}</span>
                <span className="MyPets_info-secundary_porte">{animalSize}</span>
                <span className="MyPets_info-secundary_peso">{weight}kg</span>
                <span className="MyPets_info-secundary_typePet">{animalType}</span>
            </div>
        </div>
    );
}

export default MyPets;

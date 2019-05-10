import React from 'react';
import IconSuccess from '@material-ui/icons/Check';
import './style.scss';

const MsgSuccess = ({PetAddSuccess}) => {
    return (
        <div className={`MsgSuccess ${PetAddSuccess ? 'open' : 'close'}`}>
            <IconSuccess/> {!!PetAddSuccess && <span>Pet cadastrado com sucesso!</span>}
        </div>
    );
}

export default MsgSuccess;

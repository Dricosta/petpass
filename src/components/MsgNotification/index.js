import React from 'react';
import IconSuccess from '@material-ui/icons/Check';
import IconError from '@material-ui/icons/ErrorOutline'
import './style.scss';



const MsgNotification = ({PetNotification, PetMsg, PetMsgColor, PetNotificationIcon}) => {
    return (
        <div className={`MsgSuccess ${PetNotification ? 'open' : 'close'} ${PetMsgColor ? 'success' : 'error'}`}>
            {PetNotificationIcon ? <IconSuccess/> : <IconError/> }
            {!!PetNotification && <span>{PetMsg}</span>}
        </div>
    );
}




export default MsgNotification;

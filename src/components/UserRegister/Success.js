import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class Success extends Component {

    render() {

        return (

            <Fragment>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Cadastro efetuado
                        </Typography>
                    </Toolbar>
                </AppBar>
                <h1>Obrigado por se cadastrar no PetPass!</h1>
            </Fragment>
        )
    }
}

export default Success

import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const Header = () => {
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography>
                    React Counter with Material-UI
                </Typography>
                <AccountCircleRoundedIcon/>
            </Toolbar>
            
        </AppBar>
    )
}

export default Header
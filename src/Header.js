import React from 'react'
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    makeStyles 
} from '@material-ui/core'

import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const useStyles = makeStyles({
    navStyle: {
        flex: 1
    }
})

const Header = () => {
    const classes = useStyles()
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography className={classes.navStyle}>
                    React Counter with Material-UI
                </Typography>
                <AccountCircleRoundedIcon />
            </Toolbar> 
        </AppBar>
    )
}

export default Header
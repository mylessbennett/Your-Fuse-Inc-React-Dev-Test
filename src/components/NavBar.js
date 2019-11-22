import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {
    return (
        <div>
            <Appbar position="static">
                <Toolbar>
                    <Typography variant="h4" color="inherit">
                        Your Fuse Inc. React Dev Test
                    </Typography>
                </Toolbar>
            </Appbar>
        </div>
    )
}

export default NavBar;
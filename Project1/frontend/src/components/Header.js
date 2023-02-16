import React from 'react';
import {AppBar, Typography} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';

export const Header = () => {
  return (
    <div>
        <AppBar position='sticky'>
            <Typography>
                <PeopleIcon/>
            </Typography>
        </AppBar>
    </div>
  )
}

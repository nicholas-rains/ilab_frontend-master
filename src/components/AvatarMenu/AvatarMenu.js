import React, { useState, useContext } from 'react';
import { Avatar, IconButton,  Menu, MenuItem } from '@mui/material';
import AuthContext from '../../context/AuthContext';

// The BasicMenu component is a simple menu that displays a user's profile picture and provides options to view the user's profile, account, and to log out.
export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { logout } = useContext(AuthContext);
    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // The handleLogout function calls the logout function from the AuthContext and closes the menu.
    const handleLogout = () => {
        handleClose();
        logout();
        
    }

    return (
        <div>
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

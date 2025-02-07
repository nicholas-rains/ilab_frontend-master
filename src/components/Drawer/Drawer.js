import React from 'react';
import {
    Box,
    List,
    ListItemIcon,
    ListItemText,
    IconButton,
    Divider,
    Drawer,
    ListItemButton,
    Collapse, ListSubheader,
} from '@mui/material';
import {Link} from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import BookIcon from '@mui/icons-material/Book';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';
import styled from '@mui/material/styles/styled';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 205;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(8)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(10)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function DrawerComponent({open, handleDrawerClose, currentTheme}) {
    //const [openCodeWeaver, setOpenCodeWeaver] = React.useState(false);
    const [openTestKnit, setOpenTestKnit] = React.useState(false);

    const dropdownItems = {
        //TODO: Dropdowns should be able to be added for individual items and not just categories
        //'Code Generation': {'state': openCodeWeaver, 'setState': setOpenCodeWeaver},
        'Testing Frameworks': {'state': openTestKnit, 'setState': setOpenTestKnit},
    };

    const handleClick = (category) => {
        dropdownItems[category].setState(!dropdownItems[category].state);
    };

    const renderListSubheader = (category) => (
        <Box>
            <ListSubheader
                component="div"
                sx={(theme) => ({
                    color: theme.text,
                    background:
                        theme.palette.mode === 'dark'
                            ? currentTheme.background
                            : currentTheme.background,
                })}
            >
                {open ? category : category.substring(0, 3) + "..."}
            </ListSubheader>
        </Box>
    );

    return (
        <Drawer
            variant="permanent"
            sx={(theme) => ({
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                boxSizing: 'border-box',
                background:
                    theme.palette.mode === 'dark'
                        ? theme.palette.main
                        : currentTheme.background,
                ...(open && {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': {
                        ...openedMixin(theme),
                        background:
                            theme.palette.mode === 'dark'
                                ? currentTheme.background
                                : currentTheme.background,
                    },
                }),
                ...(!open && {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': {
                        ...closedMixin(theme),
                        background:
                            theme.palette.mode === 'dark'
                                ? currentTheme.background
                                : currentTheme.background,
                    },
                }),
            })}
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                {[
                    // {'Code Generation': {name: 'Code Weaver', children: ['PySpark'/*, 'Springboot'*/]}},
                    /*{'Testing Frameworks': {name: 'TestKnit', children: ['VeriPy']}},*/
                    {'Documentation': {name: ['Docussary', /*'Code Narrator'*/]}},
                    /*{'Conversational': {name: ['ChAI', 'VAARTA']}}*/
                ].map((item, index) => {
                    const category = Object.keys(item)[0];
                    const value = item[category];

                    let Icon;
                    switch (category) {
                        case 'Code-Generation':
                            Icon = index % 2 === 0 ? CodeIcon : DeveloperModeIcon;
                            break;
                        case 'Testing Frameworks':
                            Icon = index % 2 === 0 ? CodeIcon : DeveloperModeIcon;
                            break;    
                        case 'Documentation':
                            Icon = index % 2 === 0 ? BookIcon : LibraryBooksIcon;
                            break;
                        case 'Conversational':
                            Icon = index % 2 === 0 ? ChatIcon : ForumIcon;
                            break;
                        default:
                            Icon = CodeIcon;
                    }

                    if (Array.isArray(value.name)) {
                        return (
                            <Box key={`${category}-${index}`}>
                                {renderListSubheader(category)}
                                {value.name.map((subItem) => (
                                    <ListItemButton
                                        component={Link}
                                        to={`/${subItem.replace(' ', '-')}`}
                                        key={`${category}-${index}-${subItem}`}
                                        sx={{pl: 0}}
                                    >
                                        <ListItemIcon sx={{pl: 2}}>
                                            <Icon/>
                                        </ListItemIcon>
                                        <ListItemText primary={subItem} style={{opacity: open ? 100 : 0}}/>
                                    </ListItemButton>
                                ))}
                                <Divider/>
                            </Box>
                        );
                    } else {
                        return (
                            <Box key={`${category}-${index}`}>
                                <React.Fragment>
                                    {renderListSubheader(category)}
                                    <ListItemButton onClick={() => handleClick(category)}
                                                    sx={{pl: 0}}
                                    >
                                        <ListItemIcon sx={{pl: 2}}>
                                            <Icon/>
                                        </ListItemIcon>                                       
                                        <Box sx={{pr: 2}}>
                                            <ListItemText primary={value.name} style={{opacity: open ? 100 : 0}}/>
                                        </Box>
                                        {dropdownItems[category].state ? <ExpandLess/> : <ExpandMore/>}

                                    </ListItemButton>
                                    <Collapse in={dropdownItems[category].state} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {value.children.map((child, childIndex) => (
                                                <ListItemButton
                                                    component={Link}
                                                    to={`/${value.name.replace(' ', '-')}/${child}`}
                                                    key={`${category}-${childIndex}`}
                                                    sx={{pl: 4}}
                                                >
                                                    <ListItemText primary={open ? child : child.substring(0, 2)}/>
                                                </ListItemButton>
                                            ))}
                                        </List>
                                    </Collapse>
                                </React.Fragment>
                                <Divider/>
                            </Box>
                        );
                    }
                })}
            </List>
        </Drawer>
    );
}

export default DrawerComponent;

import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Tooltip,
} from '@mui/material';
import { useTheme } from "@mui/material/styles";


const CatalogCard = ({ endpoint, index, catIndex }) => {
    const theme = useTheme();
    console.log(endpoint.imageUrl)

    return (
        <Link
            to={endpoint.path}
            style={{
                color: 'inherit',
                textDecoration: 'none',
                display: 'block'
            }}
        >
            <Box
                sx={{
                    '&:hover': {
                        transform: 'scale(1.02)',
                        transition: 'all 0.2s ease-in-out',
                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                <Card

                    key={`${catIndex}${index}${endpoint.name}`}
                    style={{
                        textAlign: 'center',
                        // height: '90%',
                        width: '20vw',
                        borderRadius: '10px',
                        boxShadow: "0 4px 8px",
                        backgroundColor: theme.palette.background.default
                    }}
                    variant="outlined"
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={endpoint.imageUrl}
                            alt={endpoint.name}
                        />
                        <CardContent
                            sx={{
                                color: 'white',
                                background: 'linear-gradient(to right, #E31937, #5236AB)',
                                '&.MuiCardContent-root': {
                                    // Make sure the class matches what you see in dev tools
                                    background:
                                        'linear-gradient(to right, #E31937, #5236AB) !important',
                                },
                            }}
                        >
                            <Tooltip title={endpoint.name}>
                                <Box>
                                    <h2>{endpoint.name}</h2>
                                    <h4>{endpoint.description}</h4>
                                </Box>
                            </Tooltip>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Link>
    );
};
export default CatalogCard;

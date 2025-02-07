import React from 'react';
import CatalogCard from '../../components/CatalogCard/CatalogCard';
import image3 from '../../assets/images/AdobeStock_241726527_lo.jpeg';

import {
    Box,
    Container,
    CssBaseline,
    Grid,
    Paper,
    
} from '@mui/material';

import './Homepage.css';
import '../../theme/GlobalCssPaper.css';

const Homepage = () => {
    // Array of arrays, each containing objects with endpoint details
    const endpoints = [
        [
       
        ],
        /*[
            {
                name: 'VeriPy',
                description: 'A Pytest Unit Test generation tool',
                path: '/testknit/veripy',
                imageUrl: image7
            },
        ],*/
        [
            {
                name: 'Docussary',
                description: 'A document-based Q&A tool',
                path: '/docussary',
                imageUrl: image3
            },
            /*{
                name: 'Code Narrator',
                description: 'A code documentation tool',
                path: '/code-narrator',
                imageUrl: image2
            },*/
        ],
        /*[
            {
                name: "Ch'ai",
                description: 'An AI-powered chatbot',
                path: '/chai',
                imageUrl: image4
            },
            {
                name: 'VAARTA',
                description: 'Voice Activated AI for Real-Time Assistance',
                path: '/VAARTA',
                imageUrl: image6
            },
        ],*/
    ];

    return (
        <Box style={{ display: 'block' }}>
            <CssBaseline />
            {/*<Header title="AIHub" subTitle="Catalog of Gen-AI Tools & Accelarators" />*/}
            <Container maxWidth="false" sx={{ mt: 1, mb: 4, px: 3 }}>
                &nbsp;
                {/* px adds horizontal padding */}
                <Paper
                    elevation={6}
                    sx={{
                        padding: 3, // Consistent padding
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        //justifyContent: 'center',
                        overflow: 'auto'
                    }}
                >
                    <Grid
                        container
                        spacing={10}
                        justifyContent="center"
                        alignItems="flex-start"
                        //marginTop="10px"
                    >
                        {endpoints.map((category, catIndex) =>
                            category.map((endpoint, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={4}
                                    key={`${catIndex}-${index}`}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center', // Centering content within grid
                                    }}
                                >
                                    <CatalogCard
                                        endpoint={endpoint}
                                        index={index}
                                        catIndex={catIndex}
                                        borderRadius={8}
                                        
                                    />
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default Homepage;

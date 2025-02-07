import React from 'react';
import Header from '../../components/Header/Header';
import CatalogCard from '../../components/CatalogCard/CatalogCard';
import {
    Box,
    Container,
    CssBaseline,
    Paper,
    Grid,
} from '@mui/material';
 
const LandingPage = ({ title, subTitle, endpoints }) => {
    return (
        <Box style={{ display: 'block' }}>
            <CssBaseline />
            <Header title={title} subTitle={subTitle} />
            <Container maxWidth="false" sx={{ mb: 4, px: 3 }}>
                &nbsp;
                <Paper
                    elevation={6}
                    sx={{
                        padding: 3,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        overflow: 'auto'
                    }}
                >
                    <Grid
                        container
                        spacing={10}
                        justifyContent="center"
                        alignItems="flex-start"
                    >
                        {endpoints.map((endpoint, index) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <CatalogCard
                                    endpoint={endpoint}
                                    index={index}
                                    borderRadius={8}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};
 
export default LandingPage;
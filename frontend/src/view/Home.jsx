import { Box, Card, CardActionArea, CardContent, Grid } from '@mui/material'
import React from 'react'
import Slider from '../components/Slider'


function Home() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Slider />
            </Box >
            <Box sx={{ width: '100%', flexGrow: 1, alignItems: 'center', marginY: '20px', paddingX: '20px' }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} >
                        <CardActionArea>
                            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <CardContent>
                                    Biginner
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <CardActionArea>
                            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <CardContent>
                                    Biginner
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <CardActionArea>
                            <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                <CardContent>
                                    Biginner
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>

                </Grid>
            </Box>


        </>
    )
}

export default Home
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/loogos.png'
import Form from 'react-bootstrap/Form';

function LoginView() {
    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', /* height: '500px' */ }}>
                <Box sx={{ width: '80%', backgroundColor: '#DDE6ED', marginY: '20px', padding: '20px', borderRadius: '5px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <img
                                src={logo}
                                width='100%'
                                height='auto'
                            />
                        </Grid>
                        <Grid item xs={12} md={5} sx={{}}>
                            <Typography sx={{ fontSize: '30px', textTransform: 'uppercase' }}>Log in</Typography>
                            <p style={{ color: '#7F8487' }}>Hello! Lets get started.</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <center>
                                    <Button sx={{ width: '80%', textTransform: 'uppercase' }} variant="contained" color="success">
                                        log in
                                    </Button>
                                </center>
                            </Form>
                            <br>
                            </br>
                            <Typography sx={{ textAlign: 'center' }}>
                                Don't you have an account? <span className='register'><a href='/register' className='reg'>Register</a></span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
        </>
    )
}

export default LoginView
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import logo from '../assets/loogos.png'
import Form from 'react-bootstrap/Form';

function RegisterView() {
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
                            <Typography sx={{ fontSize: '30px', textTransform: 'uppercase' }}>Register</Typography>
                            <p style={{ color: '#7F8487' }}>Hello! Lets get started.</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="Mobile Number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>
                                <center>
                                    <Button sx={{ width: '80%', textTransform: 'uppercase' }} variant="contained" color="success">
                                        Register
                                    </Button>
                                </center>
                            </Form>
                            <br>
                            </br>
                            <Typography sx={{ textAlign: 'center' }}>
                                Already have an account? <span className='register'><a href='/login' className='reg'>Login</a></span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
        </>
    )
}

export default RegisterView
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import logo from '../assets/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaTiktok } from 'react-icons/fa'


function Footer() {
    return (
        <>
            <Box sx={{ width: '100%', backgroundColor: 'black', }}>
                <Box sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '10px' }}>
                        <img
                            src={logo}
                            width='60px'
                            height='auto'
                        />
                    </Box>
                    <Typography
                        variant="h7"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: { xs: 'contents', md: 'none' },
                            // flexGrow: 1,
                            fontFamily: 'Gideon Roman, cursive',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'white',
                            textDecoration: 'none',
                            textTransform: 'uppercase',

                        }}
                    >
                        Black Rose Flora
                    </Typography>
                </Box>

                {/* social media */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', /* marginBottom: '5px' */ }}>
                    <IconButton>
                        <FacebookIcon className='icnbtn' sx={{ color: 'white', fontSize: '35px', marginRight: '10px', padding: '6px', borderRadius: '30px' }} />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon className='icnbtn' sx={{ color: 'white', fontSize: '35px', marginRight: '10px', padding: '6px', borderRadius: '30px' }} />
                    </IconButton>
                    <IconButton>
                        <FaTiktok className='icnbtn' style={{ color: 'white', fontSize: '32px', padding: '6px', borderRadius: '30px' }} />
                    </IconButton>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography sx={{ color: 'white', fontSize: '10px' }}>
                        Copyright © 2023 Black Rose Flora.
                    </Typography>
                </Box>
                {/* <br /> */}
            </Box>
        </>
    )
}

export default Footer
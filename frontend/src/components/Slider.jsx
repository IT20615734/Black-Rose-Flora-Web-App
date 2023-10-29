import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import img1 from '../assets/group.jpg'
import img2 from '../assets/history.jpg'
import img3 from '../assets/solo.jpg'


function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}
                        src={img1}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}
                        src={img2}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center' }}
                        src={img3}
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider
import React, { useState } from 'react'

function NavBarComp() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="Navbar">
                <div className={`nav-items ${isOpen && "open"}`}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/">Bouquets</a>
                    <a href="/">Headdress</a>
                    <a href="/">Flowers</a>
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
        </>
    )
}

export default NavBarComp
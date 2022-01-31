import React, { useState } from "react"
import Link from "next/link"
import { FaTimes } from "react-icons/fa"
import { FaBars } from "react-icons/fa";
import styles from '../styles/Menu.module.css'

function Menu() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    return (
        <>
            <div className={styles.menuIcon}>
                <a onClick={handleToggle}>
                {navbarOpen ? (
                    <FaTimes style={{ color: "#fff", fontSize: "2rem" }} />
                ) : (
                    <FaBars style={{ fontSize: "2rem" }} />
                )}
                </a>
            </div>
            <section id="menu" className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <nav>
                    <Link href='/'><a>Home</a></Link>
                    <Link href='/about'><a>About</a></Link>
                    <Link href='/portfolio'><a>Portfolio</a></Link>
                    <Link href='/contact'><a>Contact</a></Link>
                </nav>
            </section>
        </>
    )
}

export default Menu

import React from 'react'
import { NavLinkStyle, NavStyle } from '../Styles/Styles';
const Logo = 'https://www.tryklas.com/navbar/logo-white.svg';

const Repo = 'https://github.com/stephengade/Klas-FE-Challenge.git'



interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <NavStyle>

            <div className="brand_logo">
                <img src={Logo} alt="Klas logo" />
            </div>

              <NavLinkStyle>
                <a href="/ ">
                    Home
                </a>
                <a href="/add
                ">
                    Add a user
                </a>
                </NavLinkStyle>

            <div className="nav_button">
                <button className="btn nav_btn">
                    <a href={Repo} target="_blank" style={{ textDecoration: 'none', color: 'black' }} rel="noreferrer">Check Repo</a>
                </button>
            </div>
        </NavStyle>

    );
}

export default Navbar;
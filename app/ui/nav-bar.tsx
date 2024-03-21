"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import NavLink from "./Link";
import Image from "next/image";
import matheuslogo from '../../public/mhb-logo-white.png'
import { FaSun, FaMoon, FaHome } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../Context/store";

export default function NavBar() {
  const {theme, setTheme} = useGlobalContext();
  const [isDay, setIsDay] = useState(true);

  const toggleTheme = () => {
    setIsDay(!isDay);
    setTheme(isDay? 'dark': 'light');
  };

  return (
    <div className="bg-gray-900 text-white">
      <Navbar
        bg={theme === 'light' ? 'light-color' : 'dark-color'}
        variant={theme}  className="mx-auto max-w-7xl px-4 sm:px-6"
      >
        <Container className="flex justify-between items-center h-16">
          <Navbar.Brand>
            <Nav className="flex items-center space-x-4">
              <Link
                href="/"
              >
              <Image
                  src={matheuslogo}
                  alt="LOGO"
                  width={100}
                  height={20}
              />
              </Link>
            </Nav>
          </Navbar.Brand>

          <Navbar.Brand>
            <Nav className="flex items-center">
              {/* <NavLink href="/projects" name="Projects"/> */}
              {/* <NavLink href="/devtools" name="My Tools" /> */}
              {/* <NavLink href="/articles" name="Articles" /> */}
              {/* <NavLink href="/about" name="Contact" /> */}

              {/* <Nav.Link
                onClick={toggleTheme}
                className="rounded-md p-2 hover:bg-gray-600 hover:text-white focus:outline-none"
              >
                {isDay ? <FaMoon /> : <FaSun />}
              </Nav.Link> */}
            </Nav>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

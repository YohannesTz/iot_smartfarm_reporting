import React from "react";
import { Navbar } from "flowbite-react";

const NavbarComponent = () => {
    return (
        <div className="sticky top-0 z-1000 bg-white">
            <Navbar fluid rounded>
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-gray-700">
                        Iot based smart farming
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/dashboard">
                        Dashboard
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
import React from "react";
import { Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('userData'));

    let isAuthenticated = (data == null || typeof (data) == null) ? false : true;
    console.log(data);
    const handleLogOut = () => {
        localStorage.clear();
        navigate("/");
    };

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
                    {isAuthenticated && (
                        <Navbar.Link onClick={handleLogOut}>
                            Logout
                        </Navbar.Link>
                    )}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;
import React, { useState } from "react";
import { Button, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../Images/Logo.svg";

export default function Navhead() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="d-flex justify-content-between align-item-center p-3 navh">
      <NavLink to="/">
        <img src={Logo} alt="logo" />
      </NavLink>

      <div className="d-none d-md-flex align-items-center gap-4">
        <NavLink to="/Allstories">
          <h6>Stories</h6>
        </NavLink>
        <NavLink to="/contacts">
          <h6>Contact</h6>
        </NavLink>
        <NavLink to="/Login">
          <h6>Sign in</h6>{" "}
        </NavLink>
        <NavLink to="/Signup">
          <button className="btn">Get Started</button>{" "}
        </NavLink>
      </div>
      <>
        <AiOutlineMenu
          color="black"
          size="1.8rem"
          onClick={handleShow}
          className="d-block d-md-none"
        />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {" "}
              <NavLink to="/">
                <img src={Logo} alt="logo" />
              </NavLink>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-flex flex-column gap-4">
              <NavLink to="/Allstories">
                <h6>Stories</h6>
              </NavLink>
              <NavLink to="/contacts">
                <h6>Contact</h6>
              </NavLink>
              <NavLink to="/Login">
                <h6>Sign in</h6>{" "}
              </NavLink>
              <NavLink to="/Signup">
                <Button className="btn" size="lg">
                  Get Started
                </Button>
              </NavLink>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </Container>
  );
}

import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import ConfirmButton from "./Settings/ConfirmButton";
import logocoin from "./logocoin.svg";

// const Logo = styled.div`
//   font-size: 2em;
//   color: white;
// `;

const Nav = styled.nav`
  background-color: #115740;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  color: white;
  ${props =>
    props.active &&
    css`
      text-decoration: underline overline;
      text-decoration-color: #ae9132;
      color: white;
      font-size: 1.5em;
    `}
  ${props =>
    props.hidden &&
    css`
      display: none;
      color: white;
      font-size: 1.5em;
    `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit, page, setPage }) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => setPage(name)}
          hidden={firstVisit && page === "dashboard"}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
}
export default function() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light">
      <ul className="navbar-nav">
        <a className="navbar-brand mt-3 mb-3 ml-5 mr-5">
          <img src={logocoin} alt="logo" style={{ width: "70px" }} />
        </a>
      </ul>
      <ControlButton
        li
        active
        name="dashboard"
        className="navbar-toggler ml-5 mr-5"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </ControlButton>

      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
        <ControlButton name="settings" li className="nav-item">
          <a className="nav-link" href="#"></a>
        </ControlButton>
      </ul>
    </Nav>
  );
}

// {/* <Bar>
// <Logo>
//   <i className="fas fa-search-dollar"></i>Stock Sapient
// </Logo>
// <div />
// <ControlButton active name="dashboard"></ControlButton>
// <ControlButton name="settings"></ControlButton>
// </Bar> */}</Bar>

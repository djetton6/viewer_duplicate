import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 2em;
  color: white;
`;

const Bar = styled.nav`
  font-size: 1em;
  z-index: 10;
  display: grid;
  padding-bottom: 5%;
  padding-top: 4%;
  padding-left: 10%;
  pading-right: 10%;
  margin-bottom: 2%;
  grid-template-columns: 1fr auto 0.5fr 0.5fr;
  background-color: #115740;
  width: 100%;
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
    <Bar>
      <Logo>
        <i class="fas fa-search-dollar"></i>Stock Sapient
      </Logo>
      <div />
      <ControlButton active name="dashboard"></ControlButton>
      <ControlButton name="settings"></ControlButton>
    </Bar>
  );
}

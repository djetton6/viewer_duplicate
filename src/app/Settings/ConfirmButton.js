import React from "react";
import styled from "styled-components";
import { AppContext } from "../AppProvider";
import { fontSize1, greenBoxShadow, color3 } from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${color3};
  ${fontSize1}
  cursor: pointer;
  color: white;
  padding: 5px;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 7px;
  padding-right: 7px;
  border-radius: 10%;
  border-color: gold;
  background-color: #115740;
  &: hover {
    background-color: white;
    border-radius: 20%;
    color: gold;
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}

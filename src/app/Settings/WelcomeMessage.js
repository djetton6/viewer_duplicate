import React from "react";
import { AppContext } from "../AppProvider";

export default function({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome To Stock Sapient, choose your favorite funds to gather
            historical performance data. {""}
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}

// Why is props.name not working anymore?

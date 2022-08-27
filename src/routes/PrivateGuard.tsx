import React, { ReactNode, useEffect } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
// import LocalStorageService from "services/LocalStorageService";
import jwt_decode from "jwt-decode";
import moment from "moment";

interface IProps {
  component: ReactNode;
  exact: boolean;
  path: string;
}

const Private = ({ component, ...rest }: IProps) => {
  const AccessToken = "";
  const history = useHistory();
  let isvalidToken = false;
  if (AccessToken) {
    try {
      const decode: any = jwt_decode(AccessToken);
      const date = moment(new Date()).format("X");
      isvalidToken = decode.exp >= date;
    } catch (error) {
      isvalidToken = false;
    }
  }

  return (
    <Route
      {...rest}
      render={({ location }) => {
        isvalidToken ? (
          { component }
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Private;

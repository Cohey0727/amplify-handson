import React, { useEffect, useState } from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <HashRouter>
      <div className="App">{renderRoutes(routes)}</div>
    </HashRouter>
  );
};

export default App;

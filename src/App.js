import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";

// components
import Header from "./components/Header/Header";

// functions
import registerNewAccount from "./utils/functions";

// css
import "./style/App.scss";

function App() {
  const userAccounts = [
    { id: "one", password: "1" },
    { id: "two", password: "2" },
  ];

  useEffect(() => {
    localStorage.clear();
    userAccounts.forEach((account) => {
      const userInfo = {};
      userInfo.password = account.password;

      registerNewAccount(account.id, userInfo);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/main" component={Main} />
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;

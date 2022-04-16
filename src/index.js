import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "app/store";
import GlobalStyles from "components/GlobalStyles";
import AuthProvider from "./context/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <GlobalStyles>
          <AuthProvider>
            <App />
          </AuthProvider>
        </GlobalStyles>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

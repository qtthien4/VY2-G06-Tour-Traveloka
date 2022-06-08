import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default function PageNotFount() {
  return (
    <div id="container-error">
      <div id="error-page">
        <div className="content1">
          <h2 className="header123" data-text={404}>
            404
          </h2>
          <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
          <p>
            Sorry, the page you're looking for doesn't exist. If you think
            something is broken, report a problem.
          </p>
          <div className="btns">
            <Link to="/activities">return home</Link>
            <Link to="/activities">report problem</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

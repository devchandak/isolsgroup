import React from "react";
import { Link } from "react-router-dom";
import "./BreadcrumbsHeader.css";

const BreadcrumbsHeader = ({ title, backgroundImage }) => {
  return (
    <div
      className="breadcrumbs-header paralax"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ul className="half-filter">
        <li className="dark-filter relative">
          <h1 className="pull-right color-1 text-right">
            <b>{title}</b>
          </h1>
          <ul className="breadcrumbs pull-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <span className="separate">/</span>
            </li>
            <li>
              <span>{title}</span>
            </li>
          </ul>
          <div className="cutBox cut-bottom"></div>
        </li>
        <li class="custom-filter"></li>
      </ul>
    </div>
  );
};

export default BreadcrumbsHeader;

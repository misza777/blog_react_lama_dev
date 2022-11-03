import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./notFound.css";

export default function notFoundPage() {
  return (
    <>
      <Header />
      <div className="container-home">
        <div className="notFound-body">
          <img
            className="notFound-image"
            src="/404-sloth.svg"
            alt="space sloth did not found requested page"
          />
          <div className="errorPage-reason">
            <h1>Oops!</h1>
            <h2>
              Much like a Space Sloth, requested page or post does not exist.
              Sorry about that!
            </h2>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

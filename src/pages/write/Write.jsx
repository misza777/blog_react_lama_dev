import React from "react";
import "./write.css";

function Write() {
  return (
    <div className="write">
    <img className="writeImg" src="https://cdn.pixabay.com/photo/2020/04/14/16/09/sloth-5043323_1280.png" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label className="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input className="hidden" type="file" id="fileInput" />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your sloth story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;

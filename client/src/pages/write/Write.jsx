import React from "react";
import "./write.css";
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { FaPlus } from "react-icons/fa";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState("");

  //Context
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
      categories: categories.split(","),
    };

    console.log(newPost);

    if (file) {
      const data = new FormData();
      //preventing from uploading same file
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const response = await axios.post("/posts", newPost);
      window.location.replace("/post/" + response.data._id);

      if (newPost.categories.length > 0) {
        newPost.categories.forEach(async (cat) => {
          const newCat = {
            name: cat,
          };

          try {
            await axios.post("/categories", newCat);
          } catch (error) {
            console.log(error);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt="post hero"
        />
      )}
      {/* form */}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <FaPlus className="writeIcon" />
          </label>
          <input
            className="hidden"
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="category - you can add more than one, seperate with coma"
            className="writeInput category"
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your sloth story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;

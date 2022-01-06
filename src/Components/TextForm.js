import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLowClick = () => {
    console.log("Lowercase is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleClear = () => {
    console.log("Clear is clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text-Area is cleared", "success");
  };

  const handleCopyText = () => {
    console.log("Copy Text is clicked");
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to the clipboard", "success");
  };

  const handleExtraSpaces = () => {
    console.log("Remove extra spaces is clicked");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed", "success");
  };

  const handleonChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  function words() {
    if (text === " " || text === "") {
      return <i>0</i>;
    }

    // let last = text.charAt(text.length-1);

    // if(last === ' ' )
    // {
    //     return <i>{text.split(" ").length - 1}</i>;
    // }
    // else
    // {
    //     return <i>{text.split(" ").length}</i> ;
    // }

    let last = text.trim();
    const arr = last.split(" ");
    return <i>{arr.length}</i>;
  }

  const [text, setText] = useState("Enter the text here");

  return (
    <>
      <div>
        <div
          className="mb-3"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "#becfe1",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <center>
            {" "}
            <h1>{props.heading}</h1>
          </center>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleonChange}
          ></textarea>
        </div>
        <div className="d-grid gap-2 d-md-block">
          <button className="btn btn-dark mx-1" onClick={handleUpClick}>
            Upper Case
          </button>
          <button className="btn btn-dark mx-1" onClick={handleLowClick}>
            Lower Case
          </button>
          <button className="btn btn-dark mx-1" onClick={handleClear}>
            Clear{" "}
          </button>
          <button className="btn btn-dark mx-1" onClick={handleCopyText}>
            Copy{" "}
          </button>
          <button className="btn btn-dark mx-1" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
        <div
          className="conatiner my-3"
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "#becfe1",
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2>Your Text Summary</h2>
          <p>
            <i>{text.length}</i> characters and {words()} words
          </p>
          <p>
            <i>{0.008 * text.trim().split(" ").length}</i> mins to read on an
            average
          </p>

          <h2>Preview</h2>
          <div className="container">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

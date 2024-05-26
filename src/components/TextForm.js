import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here !.");

    const onbtnClick = () => {
        console.log("Click event fired !");
        setText(text.toUpperCase());
        props.showAlert("Upper case alert work","danger");
    };

    const txtBoxChange = (event) => {
        console.log("Onchange Event fired");
        setText(event.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"   style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                        {props.heading}
                    </label>
                    <textarea
                        onChange={txtBoxChange}
                        className="form-control"
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}
                        value={text}
                        id="myBox"
                        rows="10"
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={onbtnClick}>
                    Convert to Upper Case
                </button>
            </div>
            <div className="container"   style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Text Summary</h2>
                <p>Total Words {text.split(" ").length} and {text.length} Characters</p>
            </div>
        </>
    );
}

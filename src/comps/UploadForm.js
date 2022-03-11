import React, { useState } from "react";
import ProgressBar from "./progressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [err, setErr] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setErr('');
        } else {
            setErr('Please select an image file(png, jpeg)');
            setFile(null);
        }
    }

    return (
        <form>
            <label>
                <input type='file' onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {err && <div className="error">{err}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;
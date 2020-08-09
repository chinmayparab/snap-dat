import React, { useState } from "react";

const Uploader = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const upCheck = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image be it jpg or png");
    }

    if (selected.size > 548576) {
      setFile(null);
      !error && setError("File is too big! 500KB max");
    }
  };

  return (
    <form>
      <input onChange={upCheck} type='file' />
      <div className='op'>
        {error && <div className='err'>{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default Uploader;

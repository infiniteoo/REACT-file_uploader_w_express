import React, { Fragment } from "react";

const FileUpload = () => {
  return (
    <>
      <form>
        <div className="custom-file mb-4">
          <input type="file" className="custom-file-input" id="customFile" />
          <label htmlFor="customFile" className="custom-file-label">
            Choose File
          </label>
        </div>
        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
    </>
  );
};

export default FileUpload;

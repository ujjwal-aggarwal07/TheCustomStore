import { useEffect } from "react";
import { useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Icon from "react-icons-kit";
import { arrows_circle_remove } from "react-icons-kit/linea/arrows_circle_remove";
import { v4 as guid } from 'uuid';

const UploadContent = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [uploadError, setUploadError] = useState({ hasError : false, error: null});
  const localStorageKey = "localUploads";
  useEffect(() => {
    const localMedia = getImageFromLocalStorage();
    setMediaFiles(localMedia);
  }, []);

  const saveMediaFiles = (files) => {
    localStorage.setItem(localStorageKey, JSON.stringify(files));
  };

  const getImageFromLocalStorage = () => {
    var items = localStorage.getItem(localStorageKey);
    if(items)
    {
      return JSON.parse(items);
    }
    else
    {
      return [];
    }
  }
  
  const changeFileHandler = (file) => {
    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];
    const fileType = file.type;
    const maxFileSizeMB = 20; // Maximum file size in MB

    if (!allowedFileTypes.includes(fileType)) {
      setUploadError({
        hasError : true,
        error: "Invalid file type. Only PNG, JPEG, and JPG are allowed."
      });
      return;
    }

    if (file.size > maxFileSizeMB * 1024 * 1024) {
      setUploadError({
        hasError : true,
        error: "File Size is larger than supported 20MB."
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result;
      const newMediaFile = {
        id:  guid(),
        name: file.name,
        type: file.type,
        size: file.size,
        data: base64Data,
        alt_description: file.name,
        urls: {
          regular: base64Data,
        },
      };
      setMediaFiles((prevMediaFiles) => [...prevMediaFiles, newMediaFile]);
      saveMediaFiles([...mediaFiles, newMediaFile]);
    };
    reader.readAsDataURL(file);
    setUploadError({hasError:false, error: null});
    document.getElementById("file-upload").value = null;
  };

  const deleteMedia = (id) => {
    const filteredMediaFiles = mediaFiles.filter(
      (mediaFile) => mediaFile.id !== id
    );
    setMediaFiles(filteredMediaFiles);
    saveMediaFiles(filteredMediaFiles);
  };

  return (
    <div className="uploadContent">
      <label className="upload-img-btn">
        Upload Images
        <input
          type="file"
          className="file-upload-input"
          id="file-upload"
          accept=".png,.jpg,.jpeg"
          onChange={(e) => changeFileHandler(e.target.files[0])}
        />
      </label>
      {uploadError.hasError && <Alert variant='danger'>{uploadError.error}</Alert>}
      <h4 className="default-txt-styles">Recent Uploads</h4>
      {mediaFiles.length > 0 ? (
        <Container>
          <Row>
          {mediaFiles.map((file) => (
            <Col xs={12} sm={6} md={4} lg={4} key={file.id}>
              <RenderUploadedImage
                key={file.id}
                file={file}
                deleteMedia={deleteMedia}
              />
            </Col>
          ))}
          </Row>
        </Container>
      ) : (
        <Alert variant="info ">No Recent upload Found! Upload Now! </Alert>
      )}
    </div>
  );
};

const RenderUploadedImage = ({ file, deleteMedia }) => {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: "object",
  //   item: file,
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // }));

  return (
    <div className="box-upload">
      <div className="x-btn-div">
        <button
          type="button"
          className="x-btn"
          onClick={() => deleteMedia(file.id)}
        >
          <Icon icon={arrows_circle_remove} size={20} />
        </button>
      </div>
      <div
        className="drag-box-upload"
        style={{
          // border: isDragging ? "3px solid #8b3dff" : "0px",
          // opacity: isDragging ? 0.5 : 1,
          cursor: "grab",
        }}
      >
        <img src={file.data} alt={file.name} />
      </div>
    </div>
  );
};

export default UploadContent;

/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSolidLayer } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { GrAttachment } from "react-icons/gr";
import { CgCalendarDates } from "react-icons/cg";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SingleCard = ({
  style,
  data: { img1, img2, clientName, description, rating, chat, attach, date },
}) => {
  const [show, setShow] = useState(false);
  const [atch, setAtch] = useState(attach);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files.length, "atch", atch);
    const fileArray = Array.from(files);
    setSelectedFiles(fileArray);
    setAtch(files.length + atch);
    alert("file added successfully");
  };

  return (
    <>
      <div className="bg-white p-2 rounded-1 shadow-sm mb-3">
        {/* 1st part */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src={img1} alt="avatar" width={40} height={40} />
            <h6 className={`m-0 ${style.fontSize}`}>Client Name</h6>
          </div>
          <div className="d-flex align-items-center">
            <img src={img2} alt="avatar" width={40} height={40} />
            <h6 className={`m-0 ${style.fontSize}`}>{clientName}</h6>
          </div>
        </div>
        {/* 2nd part */}
        <div className="d-flex align-items-center justify-content-between my-2">
          <div className="d-flex align-items-center">
            <p className={`m-0 ms-1 ${style.fontSize2}`}>
              <BiSolidLayer className={`${style.fontSize2}`} />
            </p>
            <p className={`m-0 ms-1 ${style.fontSize2}`}>{description}</p>
          </div>
          <div className={`d-flex align-items-center ${style.textRate}`}>
            <FaClipboardList size={12} />
            <p className={`m-0 ms-1 ${style.fontSize2}`}>{rating}</p>
          </div>
        </div>
        {/* 3rd part */}
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <img
              className="me-2"
              src={img2}
              width={30}
              height={30}
              alt="avatar"
            />
            <img
              className="me-2"
              src={img1}
              width={30}
              height={30}
              alt="avatar"
            />
            <p className={`${style.imgGrp} ms-1 mb-0`}>12+</p>
          </div>
          <div
            className={`d-flex align-items-center ${style.fontContentAttach}`}
          >
            <p>
              <HiOutlineChatAlt2 className="ms-1" /> {chat}
            </p>
            <p onClick={handleShow} style={{ cursor: "pointer" }}>
              <GrAttachment className="ms-1" /> {atch}
            </p>
            <p>
              <CgCalendarDates className="ms-1" /> {date}
            </p>
          </div>
        </div>
      </div>
      {/* modal open */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Your Attach File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            onChange={handleFileChange}
            type="file"
            name=""
            id=""
            multiple={true}
          />
          {selectedFiles.length > 0 && (
            <div>
              <h2 className="text-bg-danger my-3 p-2 rounded">
                Selected Files:
              </h2>
              <ul>
                {selectedFiles.map((file, index) => (
                  <li key={index}>
                    {file.name} (Extension: {file.name.split(".").pop()})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleCard;

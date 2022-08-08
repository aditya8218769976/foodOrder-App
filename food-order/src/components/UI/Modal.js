import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal-style">
      <div>{props.children}</div>
    </div>
  );
};

const portalHelper = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalHelper
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalHelper
      )}
    </Fragment>
  );
};

export default Modal;

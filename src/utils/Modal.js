import ReactDOM from "react-dom";

function Modal({ children }) {
    // ReactDom tiene este método para crear portales
    return ReactDOM.createPortal(
      <div className="ModalBackground">
        <div className="modal-content">
          {children}
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
  
export { Modal };
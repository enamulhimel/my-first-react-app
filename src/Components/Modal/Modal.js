import React from 'react';

const Modal = (props) => {
  //   console.log(props);
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{props.modalData.name}</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label
              htmlFor="my_modal_6"
              className="btn btn btn-error"
              onClick={() => props.setModalData(null)}
            >
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

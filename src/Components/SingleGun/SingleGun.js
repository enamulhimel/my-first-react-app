import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
  const [modalData, setModalData] = useState({});
  const { gun, countIncrease } = props;
  //   const [modalData, setModalData] = useState({});
  //   console.log(modalData);

  const { name, img, bullet, capacity, price, category, action } = gun;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-60" src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">{bullet}</div>
            <div className="mt-4">
              <button
                className="btn btn-active btn-primary mr-2"
                onClick={() => countIncrease()}
              >
                Add To Cart
              </button>
              {/* <button className="btn btn-active btn-accent">Details</button> */}
              <label
                htmlFor="my_modal_6"
                className="btn btn-active btn-accent"
                onClick={() => setModalData(gun)}
              >
                Details
              </label>
              {/* <Modal /> */}
            </div>
          </div>
        </div>
      </div>
      {modalData && <Modal modalData={modalData} setModalData={setModalData} />}
    </div>
  );
};

export default SingleGun;

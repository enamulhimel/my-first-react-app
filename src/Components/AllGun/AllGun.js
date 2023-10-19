import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ countIncrease }) => {
  const [guns, setGuns] = useState([]);
  console.log(guns);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <div className="mt-5">
      <h1 className="text-4xl text-center font-bold mt-4">
        WelCome To KopaSamsu Store
      </h1>
      <p className="m-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio similique
        tempora culpa facere voluptate rem explicabo impedit numquam optio
        molestiae distinctio quam repudiandae ea animi magni sint excepturi
        voluptatum doloremque, dolores non minima laboriosam! Itaque rerum
        dolores iste consequatur nostrum, nam voluptates nobis eaque blanditiis
        dicta ullam dolorum vel maiores.
      </p>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {guns.map((gun) => (
          <SingleGun gun={gun} countIncrease={countIncrease} />
        ))}
      </div>
    </div>
  );
};

export default AllGun;

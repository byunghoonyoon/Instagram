import React from "react";
import "../styles/Grid.css";
import cors from "cors";
const Grid = () => {
  return (
    <div>
      <section>
        <ul className="list-box con grid grid-cols-3 mx-auto gap-10">
          <li>
            <a href="#">
              <img
                src="https://images.pexels.com/photos/4085643/pexels-photo-4085643.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://images.pexels.com/photos/13025002/pexels-photo-13025002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://images.pexels.com/photos/13025002/pexels-photo-13025002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://images.pexels.com/photos/13025002/pexels-photo-13025002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://images.pexels.com/photos/13025002/pexels-photo-13025002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://images.pexels.com/photos/13025002/pexels-photo-13025002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Grid;

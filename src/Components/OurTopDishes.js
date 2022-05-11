import React from "react";
import "../Styles/OurTopContainer.css";
import { FaPhoneAlt, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import dish from "../img/Banner.png";
import AOS from "aos";

function OurTopDishes() {
  AOS.refresh();
  const moveLeft = () => {
    document.querySelector(".ourTopContainer").scrollLeft -= 600;
  };
  const moveRight = () => {
    document.querySelector(".ourTopContainer").scrollLeft += 600;
  };

  return (
    <section className="ourTopDishes section grid_layout" id="topDish">
      <h2 className="section_title">Our Top Dishes</h2>

      <div className="left" onClick={moveLeft}>
        <i>
          <FaAngleLeft />
        </i>
      </div>
      <div className="right" onClick={moveRight}>
        <i>
          <FaAngleRight />
        </i>
      </div>

      <div className="ourTopContainer">
        <div className="card">
          <div className="imgBox">
            <img src={dish} alt="" />
            <i>
              <FaPhoneAlt />
            </i>
          </div>
          <div className="content">
            <h2>
              Food Name <span>with some food</span>
            </h2>

            <p>$32.00</p>
          </div>
        </div>

        <div className="card">
          <div className="imgBox">
            <img src={dish} alt="" />
            <i>
              <FaPhoneAlt />
            </i>
          </div>
          <div className="content">
            <h2>
              Food Name <span>with some food</span>
            </h2>

            <p>$32.00</p>
          </div>
        </div>

        <div className="card">
          <div className="imgBox">
            <img src={dish} alt="" />
            <i>
              <FaPhoneAlt />
            </i>
          </div>
          <div className="content">
            <h2>
              Food Name <span>with some food</span>
            </h2>

            <p>$32.00</p>
          </div>
        </div>

        <div className="card">
          <div className="imgBox">
            <img src={dish} alt="" />
            <i>
              <FaPhoneAlt />
            </i>
          </div>
          <div className="content">
            <h2>
              Food Name <span>with some food</span>
            </h2>

            <p>$32.00</p>
          </div>
        </div>

        <div className="card">
          <div className="imgBox">
            <img src={dish} alt="" />
            <i>
              <FaPhoneAlt />
            </i>
          </div>
          <div className="content">
            <h2>
              Food Name <span>with some food</span>
            </h2>

            <p>$32.00</p>
          </div>
        </div>

        <div className="card">
          <div className="imgBox">
            <img src={dish} alt="" />
            <i>
              <FaPhoneAlt />
            </i>
          </div>
          <div className="content">
            <h2>
              Food Name <span>with some food</span>
            </h2>

            <p>$32.00</p>
          </div>
        </div>

        <div className="card">
          <div className="imgBox">
            <img src={dish} alt="" />
            <i>
              <FaPhoneAlt />
            </i>
          </div>
          <div className="content">
            <h2>
              Food Name <span>with some food</span>
            </h2>

            <p>$32.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { OurTopDishes };

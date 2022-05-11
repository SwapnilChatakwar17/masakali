import React, { useEffect } from "react";
import "../Styles/OurMenu.css";
import dish from "../img/Banner.png";

function OurMenu() {
  useEffect(() => {
    const menuTabs = document.querySelector(".menuTabs");
    menuTabs.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("menuTabItem") &&
        !e.target.classList.contains("active")
      ) {
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute("data-target");
        const ourMenu = document.querySelector(".ourMenu");
        ourMenu
          .querySelector(".menuTabContent.active")
          .classList.remove("active");
        ourMenu.querySelector(target).classList.add("active");
      }
    });
  }, []);

  return (
    <section className="ourMenu section grid_layout" id="menu">
      <h2 className="section_title">Our Menu</h2>

      <div className="ourMenuContainer">
        <div className="menuTabs">
          <button
            type="button"
            className="menuTabItem active"
            data-target="#Curries"
          >
            Curries
          </button>
          <button type="button" className="menuTabItem" data-target="#Rice">
            Rice
          </button>
          <button
            type="button"
            className="menuTabItem"
            data-target="#Appaetizer"
          >
            Appaetizer
          </button>
          <button type="button" className="menuTabItem" data-target="#Tandoor">
            Tandoor
          </button>
        </div>

        <div className="row menuTabContent active" id="Curries">
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Curries Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
        </div>
        <div className="row menuTabContent" id="Rice">
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Rice Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Rice Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Rice Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Rice Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Rice Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Rice Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
        </div>
        <div className="row menuTabContent" id="Appaetizer">
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Appaetizer Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Appaetizer Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Appaetizer Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Appaetizer Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
        </div>
        <div className="row menuTabContent" id="Tandoor">
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Tandoor Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Tandoor Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
          <div className="menu-item">
            <div className="menu-item-title">
              <img src={dish} alt="" />
              <h3>Tandoor Item</h3>
            </div>

            <div className="menu-item-price">$40.00</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { OurMenu };

import React, { useEffect, useState } from "react";
import "../Styles/Header.css";
import Logo from "../img/masakali-nobg.png";
import { BiMenuAltRight } from "react-icons/bi";
import { MenuList } from "../Components/MenuList";

function Header() {
  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu");
    const menu = document.querySelector(".menu");
    toggleMenu.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }, []);

  return (
    <header className="grid">
      <img src={Logo} alt="" className="logo_img" />

      <div className="menu">
        <ul>
          {MenuList &&
            MenuList.map((menu) => (
              <li key={menu.id}>
                <a href={menu.linkSrc}>{menu.name}</a>
              </li>
            ))}
        </ul>

        <a href="#" className="our_menu">
          Contact us
        </a>
      </div>

      <i className="toggleMenu">
        <BiMenuAltRight />
      </i>
    </header>
  );
}

export { Header };

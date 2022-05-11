import React, { useState } from "react";
import "../Styles/Home.css";
import Banner from "../img/Banner.png";
import {
  FaStar,
  FaClock,
  FaHeart,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import Woman from "../img/woman.jpg";
import Man from "../img/Man.jpg";
import MintLeafs from "../img/min-leafs.png";
import Mint from "../img/mint.png";
import Discount from "../img/discount.png";
import { alpha } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

function Home() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <section className="home section grid_layout" id="home">
      <div className="homeContainer">
        <div className="home_data">
          <div className="quote">
            <p>
              its not just Food, it's an Experience.
              <img src={MintLeafs} alt="" className="MintLeafs" />
            </p>
            <div className="button_group">
              <a href="#" className="viewMenu">
                View Menu
              </a>
              <a href="#" className="book_table">
                Book A Table
              </a>
            </div>
          </div>
          <div className="reviews">
            <p>
              Happy Customers
              <span className="stars">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
              </span>
            </p>
            <div className="review_img">
              <div className="imgBox">
                <img src={Man} alt="" />
              </div>
              <div className="imgBox">
                <img src={Woman} alt="" />
              </div>
              <div className="imgBox">
                <img src={Man} alt="" />
              </div>
              <div className="imgBox">
                <p>45+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home_img">
          <img src={Mint} alt="" className="Mint" data-aos-delay="200" />
          <img src={Banner} alt="" />
          <div className="fastDeliver">
            <i>
              <FaClock />
            </i>
            <p>Fast Delivery</p>
          </div>

          <div className="hearts">
            <i className="heart_i">
              <FaHeart />
            </i>
            <p className="heart_p">1</p>
          </div>

          <div className="discount">
            <img src={Discount} alt="" />
            <h2>5%</h2>
            <p>
              <span>Discount</span> for 2 orders
            </p>
          </div>
        </div>
      </div>

      <div className="bookTable">
        <div className="date_time">
          <div className="inputBox">
            <i>
              <FaEnvelope />
            </i>
            <input type="email" placeholder="your email..." />
          </div>
          <div className="date_time_picker">
            <MuiThemeProvider theme={customTheme}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  label="Pick your Date & Time"
                />
              </MuiPickersUtilsProvider>
            </MuiThemeProvider>
          </div>
        </div>

        <a href="#" className="bookMe">
          Book a table
        </a>
      </div>
    </section>
  );
}

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(29, 42, 18)",
    },
    secondary: {
      main: "rgb(200, 250, 118)",
    },
  },
});

export { Home };

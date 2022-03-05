import React, { useContext } from "react";
import { Context } from "../store/appContext";
import dark from "../../img/dark.jpg";
import "../../styles/eventdetails.css";
import event1 from "../../img/event-photo-01.jpg";
import event2 from "../../img/event-photo-02.jpg";


export const Eventdetails = () => {
  return (
    <>
    <img id="imagen" src={dark} alt=""></img>
    <div id="bigbox">
      <div class="card">
      <div class="card-image"></div>
      <div class="card-text">
        <span class="date">4 days ago</span>
        <h2>Post One</h2>
        <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
      </div>
      <div class="card-stats">
        <div class="stat">
          <div class="value">4<sup>m</sup></div>
          <div class="type">read</div>
        </div>
        <div class="stat border">
          <div class="value">5123</div>
          <div class="type">views</div>
        </div>
        <div class="stat">
          <div class="value">32</div>
          <div class="type">comments</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-image card2"></div>
      <div class="card-text card2">
        <span class="date">1 week ago</span>
        <h2>Post Two</h2>
        <p>Adipisicing elit. Ducimus, repudiandae corrupti amet temporibus omnis provident illum maxime quod. Lorem ipsum dolor</p>
      </div>
      <div class="card-stats card2">
        <div class="stat">
          <div class="value">7<sup>m</sup></div>
          <div class="type">read</div>
        </div>
        <div class="stat border">
          <div class="value">7152</div>
          <div class="type">views</div>
        </div>
        <div class="stat">
          <div class="value">21</div>
          <div class="type">comments</div>
        </div>
      </div>
    </div>
    <div class="card">
        <div class="card-image card3"></div>
        <div class="card-text card3">
          <span class="date">3 week ago</span>
          <h2>Post Three</h2>
          <p>Repudiandae corrupti amet temporibus omnis provident illum maxime. Ducimus, lorem ipsum dolor adipisicing elit</p>
        </div>
        <div class="card-stats card3">
          <div class="stat">
            <div class="value">5<sup>m</sup></div>
            <div class="type">read</div>
          </div>
          <div class="stat border">
            <div class="value">3021</div>
            <div class="type">views</div>
          </div>
          <div class="stat">
            <div class="value">15</div>
            <div class="type">comments</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

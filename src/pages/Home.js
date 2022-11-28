import React from "react";
import image_plane from "../images/plane.jpg";
import image_ticket from "../images/ticket.jpg";
import image_seat from "../images/seat.jpg";
import image_note_1 from "../images/paper-snip-1.png";
import image_note_2 from "../images/paper-snip-2.png";
import image_flag from "../images/flag.png";
import SponsorCard from "../components/SponsorCard";
import { Link } from "react-router-dom";

import jambtree from "../images/sponsors/jambtree.png";
import cppsecrets from "../images/sponsors/cppsecrets.png";
import interviewcake from "../images/sponsors/interviewcake.png";
import codingblocks from "../images/sponsors/codingblocks.png";
import onepassword from "../images/sponsors/onepassword.png";
import interviewbuddy from "../images/sponsors/interviewbuddy.png";
import givemycertificate from "../images/sponsors/givemycertificate.png";
import elearnmarkets from "../images/sponsors/elearnmarkets.png";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="title-text">
        <h1 className="text-effect" contenteditable data-heading="SkyJack">
          SkyJack
        </h1>
      </div>
      <div className="buttons">
        <Link to={"/login"}>
          <button class="custom-btn btn-16">Begin The Hunt</button>
        </Link>
      </div>
      <h1>About The Event</h1>
      <div className="about">
        <p>
          <img images={image_note_1} alt="papers" />
        </p>
        <div className="searching">
          <div className="search">
            <div className="search__glass">
              <div className="search__glass__paper">
                <div className="search__glass__paper__">
                  <div className="search__glass__paper__text">
                    Portland To Seatle Boeing 727 hijacked. Man Leaps from Plane
                    with $200,000 ransom. SkyJacker jumps from Northwest
                    Airlines. Parachute left behind, odio imperdiet commodo
                    ullamcorper, sem justo rhoncus nunc, quis lacinia felis erat
                    eu nunc.
                  </div>
                </div>
              </div>
            </div>
            <div className="search__handle"></div>
          </div>
        </div>
      </div>
      <h1>Dan Cooper</h1>
      <div className="cooper-info">
        <div className="cardfan">
          <img images={image_plane} alt="plane" />
          <img images={image_seat} alt="seat" />
          <img images={image_ticket} alt="ticket" />
        </div>
        <p>
          <img images={image_note_2} alt="papers2" />
        </p>
      </div>
      <h1>Timeline</h1>
      <div className="timeline">
        <ul>
          <li>
            <span className="number">1</span>
            <div className="content">
              <h2>25th March, 2022</h2>
              <p>00:00 AM, Registrations Begin</p>
            </div>
          </li>
          <li>
            <span className="number">2</span>
            <div className="content">
              <h2>31st March, 2022</h2>
              <p>11:55 PM, RegistrationX End</p>
            </div>
          </li>
          <li>
            <span className="number">3</span>
            <div className="content">
              <h2>3rd April, 2022</h2>
              <p>11:00 AM, Inauguration Ceremony</p>
            </div>
          </li>
          <li>
            <span className="number">4</span>
            <div className="content">
              <h2>3rd April, 2022</h2>
              <p>12:00 PM, The Chase Begins!</p>
            </div>
          </li>
          <li>
            <span className="number">5</span>
            <div className="content">
              <h2>3rd April, 2022</h2>
              <p>8:00 PM, Treasure Hunt Ends</p>
            </div>
          </li>
          <li>
            <span className="number">6</span>
            <div className="content">
              <h2>3rd April, 2022</h2>
              <p>8:30 PM, Closing Ceremony</p>
            </div>
          </li>
          <li>
            <span className="number">7</span>
            <div className="content">
              <h2>3rd April, 2022</h2>
              <p>9:00 PM, Winner's Reveal!!</p>
            </div>
          </li>
        </ul>
      </div>
      <h1>Technical Domains</h1>
      <div className="domains">
        <div className="cards-wrapper">
          <div className="card-grid-space">
            <div className="card ds">
              <div>
                <h1>
                  Data <br /> Science
                </h1>
              </div>
            </div>
          </div>
          <div className="card-grid-space">
            <div className="card ml">
              <div>
                <h1>Machine Learning</h1>
              </div>
            </div>
          </div>
          <div className="card-grid-space">
            <div className="card cv">
              <div>
                <h1>Computer Vision</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Our Sponsors</h1>
      <div className="sponsor">
        <div className="top-sponsor">
          <SponsorCard tag="Platinum sponsor" img={jambtree} />
          <SponsorCard tag="Gold sponsor" img={elearnmarkets} />
        </div>
        <div className="bottom-sponsor">
          <SponsorCard tag="Coding partner" img={cppsecrets} />
          <SponsorCard tag="Tech partner" img={interviewcake} />
          <SponsorCard tag="Coding partner" img={codingblocks} />
          <SponsorCard tag="Security partner" img={onepassword} />
          <SponsorCard tag="Tech partner" img={interviewbuddy} />
          <SponsorCard tag="Gifting partner" img={givemycertificate} />
        </div>
      </div>
      <div className="footer-space">
        <footer className="footer">
          <div className="footer__addr">
            <img className="flag" images={image_flag} alt="flag" />
          </div>
          <ul className="footer__nav">
            <li className="nav__item">
              <h2>Reach Us</h2>
              <address>
                DJ Sanghvi College of Engineering
                <br />
                <a
                  className="footer__btn"
                  href="mailto:info.djss4ds@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Email Us
                </a>
              </address>
            </li>
            <li className="nav__item nav__item--extra">
              <h2>Contact Us</h2>
              <a
                className="footer__btn"
                href="tel:+91 84335 67777"
                rel="noopener noreferrer"
                target="_blank"
              >
                Arihant (VCP Tech)
              </a>
              <a
                className="footer__btn"
                href="tel:+91 90227 95434"
                rel="noopener noreferrer"
                target="_blank"
              >
                Yogesh (Events Head)
              </a>
            </li>
            <li className="nav__item">
              <h2>Follow Us</h2>
              <a
                className="footer__btn"
                href="https://www.instagram.com/djs_s4ds/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              <a
                className="footer__btn"
                href="https://www.linkedin.com/company/djs-s4ds/mycompany/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="footer__btn"
                href="https://discord.gg/FtUq8qXVya"
                rel="noopener noreferrer"
                target="_blank"
              >
                Discord
              </a>
            </li>
          </ul>
          <iframe
            images="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0060393298695!2d72.83500021485183!3d19.10739098706987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1648445188551!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
          <div className="legal">
            <p>&copy;All rights reserved.</p>

            <div className="legal__links">
              <span>
                Made with <span className="heart">♥</span> by DJS S4DS
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

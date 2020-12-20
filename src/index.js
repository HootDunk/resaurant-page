import contactContent from "./contact";
import { createHeaderHTML, styleCurrentNav } from "./header";
import homePageContent from "./homepage";
import menuContent from "./menu";


 window.addEventListener("DOMContentLoaded", () => {
  createHeaderHTML();
  styleCurrentNav("Home");
  homePageContent();

  const homeBtn = document.getElementById("home-nav");
  const menuBtn = document.getElementById("menu-nav");
  const contactBtn = document.getElementById("contact-nav");

  homeBtn.addEventListener("click", () => {
    document.getElementById("content").innerHTML="";
    homePageContent();
    styleCurrentNav("Home");
  })

  menuBtn.addEventListener("click", () => {
    styleCurrentNav("Menu");
    menuContent();
  })

  contactBtn.addEventListener("click", () => {
    styleCurrentNav("Contact");
    contactContent();
  })

 })




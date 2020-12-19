import createHeader, { createHeaderHTML, styleCurrentNav } from "./header";
import homePageContent from "./homepage";



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
    document.getElementById("content").innerHTML="";
  })

  contactBtn.addEventListener("click", () => {
    styleCurrentNav("Contact");
    document.getElementById("content").innerHTML="";
  })
  
 })




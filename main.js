(()=>{"use strict";const n=document.getElementById("nav-div"),e=n=>{document.querySelectorAll(".nav-btn").forEach((n=>{n.style.background="#151515"})),"Home"==n?document.getElementById("home-nav").style.background="#df1a23":"Menu"==n?document.getElementById("menu-nav").style.background="#df1a23":"Contact"==n?document.getElementById("contact-nav").style.background="#df1a23":console.log("wrong name in function call")},t=document.getElementById("content"),a=()=>{t.innerHTML+='\n\n  <img id="jumbo-img" src="assets/capriottis-jumbotron.jpg">\n  <div class="about-us">\n    <div class="about-us-text">\n      <h1>About Capriotti\'s</h1>\n      <p>Capriotti’s has been doing it our way since 1976, preparing award-winning sub sandwiches made in-house, to order with homemade ingredients. We take the time to roast whole, all-natural turkeys and roast beef in-house.</p>\n      <p>Our cold, grilled and vegetarian subs, cheese steaks and salads are available at more than 110 company-owned and franchise locations in fifteen states across the U.S.</p>\n\n    </div>\n      <div class="about-us-img">\n        <img id="store-img" src="assets/capriottis-store.png">\n      </div>\n  </div>\n  '};window.addEventListener("DOMContentLoaded",(()=>{n.innerHTML+='\n  <header>\n    <img id="nav-img" src="assets/capriottis-logo.png">\n    <nav>\n      <button id="home-nav" class="nav-btn">Home</button>\n      <button id="menu-nav" class="nav-btn">Menu</button>\n      <button id="contact-nav" class="nav-btn">Contact</button>\n    </nav>\n  </header>\n  ',e("Home"),a();const t=document.getElementById("home-nav"),o=document.getElementById("menu-nav"),d=document.getElementById("contact-nav");t.addEventListener("click",(()=>{document.getElementById("content").innerHTML="",a(),e("Home")})),o.addEventListener("click",(()=>{e("Menu"),document.getElementById("content").innerHTML=""})),d.addEventListener("click",(()=>{e("Contact"),document.getElementById("content").innerHTML=""}))}))})();
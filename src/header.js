const navDiv = document.getElementById("nav-div");

const createHeaderHTML = () => {
  let html = `
  <header>
    <img id="nav-img" src="assets/capriottis-logo.png">
    <nav>
      <button id="home-nav" class="nav-btn">Home</button>
      <button id="menu-nav" class="nav-btn">Menu</button>
      <button id="contact-nav" class="nav-btn">Contact</button>
    </nav>
  </header>
  `;
  navDiv.innerHTML += html;
}

const styleCurrentNav = (pageName) => {
  const navItems = document.querySelectorAll(".nav-btn");
  navItems.forEach(item => {
    item.style.background = '#151515';
  })
  if (pageName == "Home"){
    document.getElementById("home-nav").style.background = "#df1a23";
  }
  else if (pageName == "Menu"){
    document.getElementById("menu-nav").style.background = "#df1a23";
  }
  else if (pageName == "Contact"){
    document.getElementById("contact-nav").style.background = "#df1a23";
  }
  else {
    console.log ('wrong name in function call')
  }
}


export {
  createHeaderHTML,
  styleCurrentNav,
}


const content = document.getElementById("content");

const contactContent = () => {
  content.innerHTML = `
  <div class="contact">
    <span class="contact-container">
      <div class="contact-block">
        <div class="thumb" style="background-image: url(assets/store.jpg);"></div>
      </div>
      <div class="contact-block">
        <h1>Contact Us</h1>
        <ul>
          <li>Store Phone: 636-391-9934</li>
          <li>Email: capriottis@gmail.com</li>

        </ul>
      </div>
    </span>

    <span class="contact-container">
    <div class="contact-block">
    <h1>Click here for catering info</h1>
    <button>Catering</button>
    </div>
    <div class="contact-block">

    <div class="thumb" style="background-image: url(assets/catering.jpg);"></div>
      
    </div>
  </span>
  </div>
    
  `;
}

export default contactContent;
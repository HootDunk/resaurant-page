
const content = document.getElementById("content");

const homePageContent = () => {
  content.innerHTML += `

  <img id="jumbo-img" src="assets/capriottis-jumbotron.jpg">
  <div class="about-us">
    <div class="about-us-text">
      <h1>About Capriotti's</h1>
      <p>Capriotti’s has been doing it our way since 1976, preparing award-winning sub sandwiches made in-house, to order with homemade ingredients. We take the time to roast whole, all-natural turkeys and roast beef in-house.</p>
      <p>Our cold, grilled and vegetarian subs, cheese steaks and salads are available at more than 110 company-owned and franchise locations in fifteen states across the U.S.</p>

    </div>
      <div class="about-us-img">
        <img id="store-img" src="assets/capriottis-store.png">
      </div>
  </div>
  `;
}

export default homePageContent;
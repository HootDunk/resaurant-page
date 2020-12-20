const content = document.getElementById("content");




const menuContent = () => {


  content.innerHTML = `
  <h1 class="menu">Our Signature Subs</h1>
  <div class="band">
  <div class="item-1">
        <div class="card">
          <div class="thumb" style="background-image: url(assets/cheese-steak.png);"></div>
          <article>
            <h1>Cheese Steak</h1>
            <p>Our award winning Cheese Steak includes premium grilled steak, and melted white American cheese, fried onions, hot or sweet peppers. </p>
            <button>Order Now</button>
          </article>
        </div>
  </div>
  <div class="item-2">
        <div class="card">
          <div class="thumb" style="background-image: url(assets/chicken-cheese-steak.png);"></div>
          <article>
            <h1>Chicken Cheese Steak</h1>
            <p>Premium grilled chicken and melted provolone cheese, grilled onions and mushrooms, hot or sweet peppers.</p>
            <button>Order Now</button>
          </article>
        </div>
  </div>
  <div class="item-3">
    <div class="card">
      <div class="thumb" style="background-image: url(assets/cole-turkey.png);"></div>
      <article>
        <h1>Cole Turkey</h1>
        <p>Slow-roasted, homemade turkey, provolone cheese, Russian dressing, cole slaw, and mayo.</p>
        <button>Order Now</button>
      </article>
    </div>
  </div>
  <div class="item-4">
        <div class="card">
          <div class="thumb" style="background-image: url(assets/homemade-meatball.png);"></div>
          <article>
            <h1>Homemade Meatball</h1>
            <p>Meatballs made from scratch topped with marinara sauce, provolone and grated Romano cheese.</p>
            <button>Order Now</button>
          </article>
        </div>
  </div>
  <div class="item-5">
        <div class="card">
          <div class="thumb" style="background-image: url(assets/capastrami.png);"></div>
          <article>
            <h1>Capastrami</h1>
            <p>Hot pastrami, Swiss cheese, Russian Dressing, and coleslaw.</p>
            <button>Order Now</button>
          </article>
        </div>
  </div>
  <div class="item-6">
    <div class="card">
      <div class="thumb" style="background-image: url(assets/the-bobbie.png);"></div>
      <article>
        <h1>The Bobbie</h1>
        <p>The nationally acclaimed best-seller! Homemade Turkey, cranberry sauce, stuffing, and mayo. </p>

        <button>Order Now</button>
      </article>
    </div>
  </div>
  
</div>
  `;
}

export default menuContent;
import { createCityCard } from "./createCityCard.js";

function buildPage(collection) {
  const header = document.createElement("header");
  header.innerHTML = `
    <div class="header">
      <div class="airplane-img">
        <img src="assets/images/airplane1.jpg" alt="airplane's windows that shows the city" id="airplane">
      </div>
      <div class="header-info">
        <h1>Discover Your Next Adventure</h1>
        <p><em>Embark on a European adventure and delve into a diverse tapestry of history, culture, and breathtaking sights. From Paris, the City of Love, with its iconic Eiffel Tower, to Amsterdam's picturesque canals and vibrant culture. Wander through Barcelona's blend of Gothic and modernist architecture, and Rome's ancient treasures. Discover Vienna's classical music scene, Prague's fairy-tale charm, and Athens' cradle of civilization. Experience the enchanting medieval beauty of Dubrovnik, the rich history and natural beauty of Edinburgh, and the vibrant blend of old and new in London. Each city offers a unique story and unforgettable experiences, making Europe a perfect destination for every traveler.</em></p>
      </div>
    </div>
  `;

  const main = document.createElement("main");
  const cardsContainer = document.createElement("div");
  cardsContainer.className = "cards-container";
  collection.forEach((city) => {
    cardsContainer.appendChild(createCityCard(city));
  });
  main.appendChild(cardsContainer);

  const footer = document.createElement("footer");
  footer.innerHTML = `
    <div class="footer-info">
      <div class="contact">
        <h2>Contact Us</h2>
        <p>Phone: +1 123 456 7890</p>
        <p>Email: <a href="mailto:wanderlust.europe@example.com">wanderlust.europe@example.com</a></p>
      </div>
      <div class="copy-rights">
        <p>&copy; 2023 Wanderlust Europe</p>
      </div>
      <div>
        This Project Coded by <a href="https://github.com/Bushra-88">Bushra Alhusaini</a>
      </div>
    </div>
  `;

  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
}
export { buildPage };

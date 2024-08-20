const collection = [
  {
    name: "Paris, France",
    description:
      "The City of Love, Paris, is famous for its iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Enjoy French cuisine, stroll along the Seine River, and immerse yourself in art and culture.",
    location: "Île-de-France",
    famousFeatures: ["Eiffel Tower", "Champs-Elysées", "Montmartre"],
    bestTimeToVisit: "spring and fall",
    link: "Learn more",
    image: "Paris.jpg",
  },

  {
    name: "Amsterdam, Netherland",
    description:
      "Amsterdam is known for its picturesque canals, historic architecture, and vibrant cultural scene. Visit the Anne Frank House, Rijks museum, and take a canal cruise.",
    location: "North Holland",
    famousFeatures: ["Dam Square", "Van Gogh Museum", "Jordaan district"],
    bestTimeToVisit: "spring and summer",
    link: " Learn more",
    image: "Amsterdam.jpg",
  },

  {
    name: "Barcelona, Spain",
    description:
      "Barcelona offers a blend of Gothic and modernist architecture. Explore Antoni Gaudí's masterpieces (Sagrada Família, Park Güell), relax on the beaches, and savor tapas",
    location: "Catalonia",
    famousFeatures: ["La Rambla", "Casa Batllo", "Gothic Quarter"],
    bestTimeToVisit: "spring and autumn",
    link: "Learn more",
    image: "Barcelona.jpg",
  },

  {
    name: "Rome, Italy",
    description:
      " The Eternal City, Rome, is a treasure trove of ancient history. Visit the Colosseum, Vatican City, and indulge in authentic Italian pasta and gelato.",
    location: "Lazio",
    famousFeatures: ["Colosseum", "Pantheon", "Trevi Fountain"],
    bestTimeToVisit: "spring and autumn",
    link: "Learn more",
    image: "Rome.jpg",
  },

  {
    name: "Vienna, Austria",
    description:
      "Vienna is a city of classical music, elegant palaces, and coffeehouses. Explore Schönbrunn Palace, Belvedere Palace, and attend a concert at the Vienna State Opera.",
    location: "Vienna",
    famousFeatures: ["Hofburg Palace", "St.Stephen's Cathedral", "Prater Park"],
    bestTimeToVisit: "spring and summer",
    link: "Learn more",
    image: "Vienna.jpg",
  },

  {
    name: "Prague, Czech Republic",
    description:
      "Prague, the City of a Hundred Spires, boasts a fairy-tale charm. Visit Prague Castle, Charles Bridge, and enjoy Czech beer in historic pubs.",
    location: "Prague",
    famousFeatures: ["Old Town Square", "Astronomical Clock", "Vysehrad"],
    bestTimeToVisit: "spring and autumn",
    link: "Learn more",
    image: "Prague.jpg",
  },

  {
    name: "Athens, Greece",
    description:
      "Athens is the cradle of Western civilization. Explore the Acropolis, Plaka neighborhood, and taste Greek souvlaki.",
    location: "Attica",
    famousFeatures: ["Parthenon", " Acropolis Museum", "Monastiraki Square"],
    bestTimeToVisit: "spring and autumn",
    link: "Learn more",
    image: "Athens.jpg",
  },

  {
    name: "Dubrovnik, Croatia",
    description:
      "Dubrovnik, the “Pearl of the Adriatic,” offers stunning medieval architecture. Walk the city walls, visit Fort Lovrijenac, and swim in the crystal-clear waters.",
    location: "Dubrovnik-Neretva County",
    famousFeatures: [" Old Town", "Stradun", "Lokrum Island"],
    bestTimeToVisit: "spring and autumn",
    link: "Learn more",
    image: "Dubrovnik.jpg",
  },

  {
    name: "Edinburgh, Scotland",
    description:
      "Edinburgh combines history, culture, and natural beauty. Explore Edinburgh Castle, the Royal Mile, and hike up Arthur's Seat.",
    location: "Edinburgh",
    famousFeatures: [
      " Holyrood Palace",
      "Princes Street Gardens",
      "Calton Hill",
    ],
    bestTimeToVisit: " summer",
    link: "Learn more",
    image: "Edinburgh.jpg",
  },

  {
    name: "London, United Kingdom",
    description:
      "London, the vibrant capital of the United Kingdom, seamlessly blends history, culture, and modernity. From iconic landmarks to hidden gems, there's something for every traveler.",
    location: "London",
    famousFeatures: [
      "Buckingham Palace",
      "The British Museum",
      "The London Eye",
    ],
    bestTimeToVisit: "summer",
    link: "Learn more",
    image: "London.jpg",
  },
];

function buildPage() {
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

function createCityCard(city) {
  const card = document.createElement("div");
  card.className = "card";

  const cityImg = document.createElement("div");
  cityImg.className = "city-img";
  const img = document.createElement("img");
  img.src = `assets/images/${city.image}`;
  img.alt = city.name;
  cityImg.appendChild(img);

  const visitP = document.createElement("p");
  visitP.className = "visit";
  visitP.textContent = "Best Time to visit: ";
  const visitSpan = document.createElement("span");
  visitSpan.textContent = city.bestTimeToVisit;
  visitP.appendChild(visitSpan);

  const h2 = document.createElement("h2");
  h2.textContent = city.name;

  const h4 = document.createElement("h4");
  h4.textContent = "Location: ";
  const locationSpan = document.createElement("span");
  locationSpan.textContent = city.location;
  h4.appendChild(locationSpan);

  const descP = document.createElement("p");
  descP.textContent = city.description;

  const h3 = document.createElement("h3");
  h3.textContent = "Famous features :";
  const ul = document.createElement("ul");
  ul.className = "famous-features";
  city.famousFeatures.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    ul.appendChild(li);
  });

  const link = document.createElement("a");
  link.href = "#";
  link.className = "link";
  link.textContent = city.link;

  card.append(cityImg, visitP, h2, h4, descP, h3, ul, link);
  return card;
}

document.addEventListener("DOMContentLoaded", buildPage);

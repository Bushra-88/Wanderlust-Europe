export function createCityCard(city) {
  const card = document.createElement("div");
  card.className = "card";

  const cityImg = document.createElement("div");
  cityImg.className = "city-img";
  const img = document.createElement("img");
  img.src = `/assets/images/${city.image}`;
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

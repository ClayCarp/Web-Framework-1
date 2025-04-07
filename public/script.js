const meals = [
  "Pizza", "Sushi", "Pasta", "Burger", "Tacos", "Salad", "Steak", "Chicken Curry", "Stir Fry", "Burritos"
];

const restaurantSuggestions = {
  "Pizza": [
    { name: "Papa John's Pizza", address: "215 Farris Rd, Conway, AR", phone: "+1 501-327-9111" },
    { name: "Little Caesars Pizza", address: "2670 Prince St, Conway, AR", phone: "+1 501-329-7300" },
    { name: "Pizza Hut", address: "705 Club Lane, Suite 101, Conway, AR", phone: "+1 501-327-4449" }
  ],
  "Sushi": [
    { name: "Rock N Roll Sushi", address: "975 S Amity Rd, Conway, AR", phone: "+1 501-358-6820" },
    { name: "Kohana Asian Restaurant", address: "605 Salem Rd 10, Conway, AR", phone: "+1 501-499-6919" }
  ],
  "Pasta": [
    { name: "Olive Garden Italian Restaurant", address: "554 Museum Road, Conway, AR", phone: "+1 501-585-4482" },
    { name: "The Pasta Grill", address: "915 Front St, Conway, AR", phone: "+1 501-205-8751" }
  ],
  "Burger": [
    { name: "David's Burgers", address: "1200 S Amity Rd, Conway, AR", phone: "+1 501-703-0571" },
    { name: "Five Guys", address: "975 S Amity Rd Ste C, Conway, AR", phone: "+1 501-273-5003" },
    { name: "Whataburger", address: "813 E Oak, Conway, AR", phone: "+1 501-358-4406" }
  ],
  "Tacos": [
    { name: "Taco Bell", address: "2715 Prince St, Conway, AR", phone: "+1 501-327-7007" },
    { name: "Taco Bueno", address: "1155 Dave Ward Dr, Conway, AR", phone: "+1 501-450-3999" }
  ],
  "Salad": [
    { name: "Chicken Salad Chick", address: "2235 Dave Ward Dr, Conway, AR", phone: "+1 501-710-6677" },
    { name: "U.S. Pizza", address: "710 Front St, Conway, AR", phone: "+1 501-450-9700" }
  ],
  "Steak": [
    { name: "Texas Roadhouse", address: "650 S Amity Rd, Conway, AR", phone: "+1 501-585-7720" },
    { name: "Outback Steakhouse", address: "955 E Oak St, Conway, AR", phone: "+1 501-548-6220" }
  ],
  "Chicken Curry": [
    { name: "Taj Mahal Indian Kitchen", address: "2850 Prince St Ste 79, Conway, AR", phone: "+1 501-712-5772" },
    { name: "Xen & Thai Ramen", address: "605 Salem Rd Ste 9, Conway, AR", phone: "+1 501-504-6926" }
  ],
  "Stir Fry": [
    { name: "Bulgogi Korean BBQ", address: "317 Oak St Ste 1, Conway, AR", phone: "+1 501-358-5923" },
    { name: "Panda Express", address: "811 E Oak St, Conway, AR", phone: "+1 501-358-3082" }
  ],
  "Burritos": [
    { name: "Chipotle Mexican Grill", address: "915 E Oak St, Conway, AR", phone: "+1 501-504-2416" },
    { name: "Don Pepe's", address: "2225 Prince St, Conway, AR", phone: "+1 501-358-6007" }
  ]
};

function getRandomMeal() {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
}

function displayMap(address, restaurantName) {
  const mapDiv = document.getElementById('map');
  mapDiv.innerHTML = ''; 

  document.getElementById('restaurantName').textContent = `${restaurantName}`;

  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'address': address }, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      const map = new google.maps.Map(mapDiv, {
        zoom: 15,
        center: results[0].geometry.location,
      });

      const marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location,
        title: restaurantName,
      });

      const infowindow = new google.maps.InfoWindow({
        content: `<h2>${restaurantName}</h2><p>${address}</p>`,
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    } else {
      console.error("Geocode failed due to: " + status);
    }
  });
}

function displayRestaurants(meal) {
  const restaurantList = document.getElementById('restaurantList');
  restaurantList.innerHTML = '';

  const restaurants = restaurantSuggestions[meal];
  if (!restaurants || restaurants.length === 0) {
    restaurantList.innerHTML = 'No restaurants found for that meal.';
  } else {
    restaurants.forEach((restaurant) => {
      const listItem = document.createElement('li');

      const restaurantName = document.createElement('span');
      restaurantName.innerHTML = `<strong>${restaurant.name}</strong>`;
      listItem.appendChild(restaurantName);

      const restaurantInfo = document.createElement('p');
      restaurantInfo.innerHTML = `Address: ${restaurant.address}<br>Phone: ${restaurant.phone}`;
      listItem.appendChild(restaurantInfo);

      listItem.addEventListener('click', () => {
        displayMap(restaurant.address, restaurant.name);
      });

      restaurantList.appendChild(listItem);

      if (restaurant === restaurants[0]) {
        displayMap(restaurant.address, restaurant.name);
      }
    });
  }
}

document.getElementById('rngButton').addEventListener('click', function() {
  document.getElementById('restaurant').style.display = 'block';
  document.getElementById('restaurantList').style.display = 'block';
  document.querySelector('.map-container').style.display = 'block';

  const meal = getRandomMeal();
  document.getElementById('mealSuggestion').textContent = `${meal}!`;

  displayRestaurants(meal);
});

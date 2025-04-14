const meals = [
  "Pizza", "Sushi", "Pasta", "Burger", "Tacos", "Salad", "Steak", "Chicken Curry", "Stir Fry", "Burritos"
];

const restaurantSuggestions = {
  "Pizza": [
    { name: "Papa John's Pizza", address: "215 Farris Rd, Conway, AR", phone: "+1 501-327-9111" },
    { name: "Little Caesars Pizza", address: "2670 Prince St, Conway, AR", phone: "+1 501-329-7300" },
    { name: "Pizza Hut", address: "705 Club Lane, Suite 101, Conway, AR", phone: "+1 501-327-4449" },
    { name: "Hideaway Pizza", address: "1170 S Amity Rd, Conway, AR", phone: "+1 501-697-4444" }
  ],
  "Sushi": [
    { name: "Rock N Roll Sushi", address: "975 S Amity Rd, Conway, AR", phone: "+1 501-358-6820" },
    { name: "Kohana Asian Restaurant", address: "605 Salem Rd 10, Conway, AR", phone: "+1 501-499-6919" },
    { name: "Rock N Roll Sushi", address: "975 S Amity Rd, Conway, AR", phone: "+1 501-358-6820" },
    { name: "Rock N Roll Sushi", address: "975 S Amity Rd, Conway, AR", phone: "+1 501-358-6820" }
  ],
  "Pasta": [
    { name: "Olive Garden Italian Restaurant", address: "554 Museum Road, Conway, AR", phone: "+1 501-585-4482" },
    { name: "The Pasta Grill", address: "915 Front St, Conway, AR", phone: "+1 501-205-8751" },
    { name: "Olive Garden Italian Restaurant", address: "554 Museum Road, Conway, AR", phone: "+1 501-585-4482" },
    { name: "Olive Garden Italian Restaurant", address: "554 Museum Road, Conway, AR", phone: "+1 501-585-4482" }
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

function createDirectionsQuestion(restaurant) {
  const directionsQuestion = document.getElementById('directionsQuestion');
  
  // Ensure the question container is properly displayed
  directionsQuestion.style.display = 'block';
  directionsQuestion.innerHTML = `
    <p>Would you like directions to this restaurant?</p>
    <button id="directionsYesButton">Yes</button>
    <button id="directionsNoButton">No</button>
  `;

  // Attach event listeners for Yes and No buttons
  document.getElementById('directionsYesButton').addEventListener('click', function() {
    console.log('Directions requested!');
    displayDirectionsOnMap(restaurant);
  });

  document.getElementById('directionsNoButton').addEventListener('click', function() {
    directionsQuestion.style.display = 'none';
    console.log('Directions not needed.');
  });
}

function displayMap(address, restaurantName) {
  const mapDiv = document.getElementById('map');
  mapDiv.innerHTML = ''; // Clear previous map

  document.getElementById('restaurantName').textContent = `${restaurantName}`;

  createDirectionsQuestion({ address, restaurantName });

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

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          const userLocation = new google.maps.LatLng(userLat, userLng);

          new google.maps.Marker({
            position: userLocation,
            map: map,
            title: "Your Location",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          });

          map.setCenter(userLocation);
        });
      }
    }
  });
}

function displayDirectionsOnMap(restaurant) {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const mapDiv = document.getElementById('map');

  const map = new google.maps.Map(mapDiv, {
    zoom: 15,
    center: { lat: 35.082, lng: -92.441 }, // Default center (Can be modified)
  });

  directionsRenderer.setMap(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const userLat = position.coords.latitude;
      const userLng = position.coords.longitude;

      const userLocation = new google.maps.LatLng(userLat, userLng);
      const request = {
        origin: userLocation,
        destination: restaurant.address,
        travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(response);
        }
      });
    });
  }
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

      const favoriteButton = document.createElement('button');
      favoriteButton.textContent = '⭐ Favorite';
      favoriteButton.addEventListener('click', () => {
        saveFavorite(restaurant);
        alert(`${restaurant.name} added to favorites!`);
      });
      listItem.appendChild(favoriteButton);

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

function saveFavorite(restaurant) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Avoid duplicates
  const exists = favorites.some(
    (fav) => fav.name === restaurant.name && fav.address === restaurant.address
  );
  if (!exists) {
    favorites.push(restaurant);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

function loadFavorites() {
  const container = document.getElementById('favoritesList');
  if (!container) return;

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  container.innerHTML = ''; // Clear any existing content

  if (favorites.length === 0) {
    container.innerHTML = '<p class="empty-state">No favorites saved yet!</p>';
  } else {
    favorites.forEach((restaurant) => {
      const favDiv = document.createElement('div');
      favDiv.classList.add('favorite-item');

      favDiv.innerHTML = `
        <strong>${restaurant.name}</strong><br>
        Address: ${restaurant.address}<br>
        Phone: ${restaurant.phone}<br><br>
      `;

      container.appendChild(favDiv);
    });
  }
}

// Call this only if we're on the favorites page
document.addEventListener('DOMContentLoaded', loadFavorites);


document.getElementById('rngButton').addEventListener('click', function() {
  document.getElementById('restaurant').style.display = 'block';
  document.getElementById('restaurantList').style.display = 'block';
  document.querySelector('.map-container').style.display = 'block';

  const meal = getRandomMeal();
  document.getElementById('mealSuggestion').textContent = `${meal}!`;

  displayRestaurants(meal);
});
